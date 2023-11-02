import { FC, useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { isEqual } from "lodash";
import { toast } from "react-toastify";

import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";

import { useNavigate, useParams } from "react-router-dom";
import { challenges } from "../../../../challenges/challenges";
import { getFunctionBasedOnCode } from "../../../../utils/getFunctionBasedOnCode/getFunctionBasedOnCode";
import {
  addSolution,
  useSolutionQuery,
  updateSolution,
} from "../../../../indexed-db/db";

declare global {
  interface Window {
    customLog: () => void;
  }
}

interface AlertMessageType {
  message: string;
  variant: "light" | "danger" | "success";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.customLog = function (...args: any[]) {
  console.log(...args);
  const evt = new CustomEvent("customLog", { detail: args });
  window.dispatchEvent(evt);
};

function isCustomEvent(event: Event): event is CustomEvent {
  return "detail" in event;
}

interface ConsoleOutput {
  type: "error" | "neutral" | "success";
  output: string;
}

const textClasses: Record<ConsoleOutput["type"], string> = {
  error: "text-danger",
  success: "text-success",
  neutral: "text-secondary",
};

export const Code: FC = () => {
  const { id = "" } = useParams<{ id: string }>();
  const savedSolution = useSolutionQuery(id);
  const navigate = useNavigate();

  const challenge = challenges.find((ch) => ch.id === id);

  const [code, setCode] = useState(challenge?.initialSnippet || "");
  const [passedChecks, setPassedChecks] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<ConsoleOutput[]>([]);
  const [alertMessage, setAlertMessage] = useState<AlertMessageType>({
    variant: "light",
    message:
      "Please enter your solution inside the function below. Remember to use parameters if they exist.",
  });

  const handleCustomLog = (event: Event) => {
    if (isCustomEvent(event)) {
      setConsoleOutput((prev) => [
        ...prev,
        {
          type: "neutral",
          output: event.detail
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((el: any) => JSON.stringify(el, null, 2))
            .join(", "),
        },
      ]);
    }
  };

  useEffect(() => {
    window.addEventListener("customLog", handleCustomLog);
    return () => window.removeEventListener("customLog", handleCustomLog);
  }, [id]);

  const formatAndUpdateCode = async (codeToSaveAndFormat: string) => {
    const formattedCode = await prettier.format(codeToSaveAndFormat, {
      parser: "babel",
      plugins: [parserBabel],
    });
    setCode(formattedCode);
  };

  useEffect(() => {
    if (savedSolution && savedSolution.code && savedSolution.code !== code) {
      if (challenge?.id === id) {
        formatAndUpdateCode(savedSolution.code);
        setAlertMessage({
          variant: "success",
          message:
            "To zadanie już zrobiłaś/eś poprawnie - ale zawsze możesz je zaktualizować!",
        });
      }
    } else if (challenge?.id === id && !passedChecks) {
      formatAndUpdateCode(challenge?.initialSnippet || "");
      setAlertMessage({
        variant: "light",
        message:
          "Please enter your solution inside the function below. Remember to use parameters if they exist.",
      });
    }

    setPassedChecks(false);
    setConsoleOutput([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedSolution?.id, id]);

  useEffect(() => {
    formatAndUpdateCode(code);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheckClick = () => {
    setConsoleOutput([]);

    try {
      let testResult = false;
      challenge?.tests.forEach((test) => {
        const { input, output, outputType } = test;
        const solution = getFunctionBasedOnCode(code, input);
        const result = solution();

        if (outputType === "number") {
          testResult = isEqual(Number(result), Number(output));
        } else if (outputType === "complex") {
          testResult = isEqual(result, JSON.parse(output));
        } else {
          testResult = isEqual(result, output);
        }

        setConsoleOutput((prev) => [
          ...prev,
          {
            type: testResult ? "success" : "error",
            output: testResult
              ? `You did it! Expected result: ${JSON.stringify(
                  output
                )}; Current result: ${JSON.stringify(result)}`
              : `Something went wrong! Expected result: ${JSON.stringify(
                  output
                )}; Current result: ${JSON.stringify(result)}`,
          },
        ]);

        setAlertMessage({
          message: testResult
            ? "Udało się! Twoja funkcja działa zgodnie z oczekiwaniem!"
            : "Twoja funkcja nie działa zgodnie z oczekiwaniami sprawdź wynik w konsoli poniżej",
          variant: testResult ? "success" : "danger",
        });
      });

      setPassedChecks(testResult);
    } catch (error) {
      setPassedChecks(false);
      setAlertMessage({
        message: "Something went really wrong! You made a mistake in your code",
        variant: "danger",
      });
      console.error(error);

      if (
        !!error &&
        typeof error === "object" &&
        "message" in error &&
        typeof error.message === "string"
      ) {
        setConsoleOutput((prev) => [
          ...prev,
          { type: "error", output: (error as Error).message },
        ]);
      }

      try {
        const err = JSON.stringify(error);
        setConsoleOutput((prev) => [...prev, { type: "error", output: err }]);
      } catch (_error) {
        console.error(_error, error);
      }
    }
  };

  const handleSubmitClick = async () => {
    if (passedChecks && challenge && code) {
      try {
        await addSolution(challenge.id, code);
        toast("Your solution has been successfully saved in memory!", {
          type: "success",
        });
        console.log("wchodze tut");
      } catch (error) {
        toast(
          "We encountered some problem - your solution is not saved in memory!",
          { type: "error" }
        );
      }
    }
  };

  const handleUpdateClick = async () => {
    if (passedChecks && challenge && savedSolution && code) {
      try {
        await updateSolution(challenge.id, code);
        toast("Your solution has been successfully updated!", {
          type: "success",
        });
      } catch (error) {
        toast(
          "We encountered some problem - we couldn't update your solution!",
          { type: "error" }
        );
      }
    }
  };

  const handleNextExerciseClick = (nextExerciseId?: string) => {
    console.log({ nextExerciseId });
    if (nextExerciseId) {
      navigate(`/exercises/${nextExerciseId}`);
    }
  };

  const nextChallengeIndex = challenges.findIndex((ch) => ch.id === id);
  const nextChallenge = challenges[nextChallengeIndex + 1];

  return (
    <>
      <Row className="mt-4">
        <Col sm={12}>
          <h1 className="display-6 mb-3">{challenge?.title}</h1>
          <Alert className="opacity-100" variant={alertMessage.variant}>
            {alertMessage.message}
          </Alert>
        </Col>
        <Col sm={12} md={8}>
          <Card>
            <Card.Header className="d-flex justify-content-between ">
              Editor
              <Button
                size="sm"
                onClick={() => {
                  formatAndUpdateCode(code);
                }}
              >
                Format code
              </Button>
            </Card.Header>
            <CodeMirror
              value={code}
              onChange={setCode}
              extensions={[javascript({ jsx: true })]}
              height="300px"
              basicSetup={{ lineNumbers: true }}
            />
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Header>Console</Card.Header>
            <Card.Body style={{ height: 300, overflowY: "auto" }}>
              {consoleOutput.map(({ output, type }, index) =>
                type === "neutral" ? (
                  <pre className={textClasses[type]} key={`${output}${index}`}>
                    {output}
                  </pre>
                ) : (
                  <p className={textClasses[type]} key={`${output}${index}`}>
                    {output}
                  </p>
                )
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="bg-light border-top position-fixed bottom-0 start-0 end-0">
        <Container className="py-4 d-flex justify-content-end gap-3">
          <Button size="lg" onClick={handleCheckClick}>
            Check
          </Button>
          {passedChecks && !savedSolution && (
            <Button size="lg" variant="success" onClick={handleSubmitClick}>
              Submit solution
            </Button>
          )}

          {!!savedSolution && passedChecks && (
            <Button size="lg" variant="success" onClick={handleUpdateClick}>
              Update current solution
            </Button>
          )}

          {!!savedSolution && !!nextChallenge && (
            <Button
              size="lg"
              variant="success"
              onClick={() => handleNextExerciseClick(nextChallenge.id)}
            >
              Next exercise
            </Button>
          )}
        </Container>
      </div>
    </>
  );
};
