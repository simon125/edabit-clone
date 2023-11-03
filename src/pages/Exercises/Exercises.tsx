import { FC, useState } from "react";
import { Badge, Button, Card, Col, Form, Row, Stack } from "react-bootstrap";
import { Chart } from "../../components/Chart/Chart";
import { Link } from "react-router-dom";
import { challenges } from "../../challenges/challenges";
import { useSolutionsQuery } from "../../indexed-db/db";
import NO_EXERCISES from "../../assets/no_exercises.svg";
import { ResetProgressModal } from "./components/ResetProgressModal/ResetProgressModal";
import { IntroModal } from "./components/IntroModal/IntroModal";

export const Exercises: FC = () => {
  const [level, setLevel] = useState("all");
  const [hideCompleted, setHideCompleted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showIntroModal, setShowIntroModal] = useState(false);
  const { solutions, isLoading } = useSolutionsQuery();

  const numberOfCompleted = solutions?.length || 0;
  const totalNumber = challenges?.length || 0;

  const levelBadge = {
    easy: "info",
    medium: "warning",
    hard: "danger",
  };

  const challengesFilteredByLevel =
    level === "all"
      ? challenges
      : challenges.filter((challenge) => challenge.level === level);

  const notCompletedChallenges = hideCompleted
    ? challengesFilteredByLevel.filter(
        (challenge) =>
          !solutions.find((solution) => solution.id === challenge.id)
      )
    : challengesFilteredByLevel;

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Row>
        <Col sm={12} md={3}>
          <Card className="mb-3">
            <Card.Body>
              <Form.Select
                value={level}
                onChange={(event) => setLevel(event.target.value)}
                aria-label="Level"
                className="mb-4 "
              >
                <option value="all">All levels</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </Form.Select>
              <Form.Check
                checked={hideCompleted}
                onChange={() => setHideCompleted((prev) => !prev)}
                type="switch"
                id="custom-switch"
                label="Hide completed"
              />
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Chart
                completed={numberOfCompleted}
                todo={totalNumber - numberOfCompleted}
              />
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Button onClick={() => setShowIntroModal(true)} className="w-100">
                Watch Edabit Intro
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={9} className="d-flex flex-column gap-3">
          {notCompletedChallenges.length === 0 && (
            <Card>
              <Card.Body>
                <img className="d-block w-50 mx-auto" src={NO_EXERCISES} />
                <p className="lead text-center mt-5">
                  Uuups! Wszystkie zadania zostały porwane przez kosmitów :/
                </p>
                <p className="lead text-center mt-5">
                  Spokojnie to tylko nieśmieszny żart albo nie ma dostępnych
                  zadań albo filtry ofiltrowały wszystkie zadania.
                </p>
              </Card.Body>
            </Card>
          )}

          {notCompletedChallenges.map(
            ({ id, title, shortDescription, level, tags }) => {
              return (
                <Card key={id}>
                  <Card.Header>{title}</Card.Header>
                  <Card.Body>{shortDescription}</Card.Body>
                  <Card.Footer>
                    <Stack direction="horizontal" gap={2}>
                      {!!solutions.find((solution) => solution.id === id) && (
                        <Badge bg="success">completed</Badge>
                      )}
                      {!!levelBadge[level as keyof typeof levelBadge] && (
                        <Badge
                          bg={levelBadge[level as keyof typeof levelBadge]}
                        >
                          {level}
                        </Badge>
                      )}
                      {tags.map((tag) => (
                        <Badge key={tag} bg="secondary">
                          {tag}
                        </Badge>
                      ))}
                      <Link
                        className="btn btn-success btn-sm ms-auto"
                        to={`/exercises/${id}`}
                      >
                        Let's practice
                      </Link>
                    </Stack>
                  </Card.Footer>
                </Card>
              );
            }
          )}
        </Col>
      </Row>
      <Button
        onClick={() => setShowModal(true)}
        variant="danger"
        style={{ bottom: 20, right: 20 }}
        className="position-fixed rounded-5 "
      >
        Reset progress
      </Button>
      <ResetProgressModal
        showModal={showModal}
        onHide={() => setShowModal(false)}
      />
      <IntroModal
        show={showIntroModal}
        onClose={() => setShowIntroModal(false)}
      />
    </>
  );
};
