import { FC } from "react";
import { Badge, Card, Col, Row, Stack } from "react-bootstrap";
import Markdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Challenge } from "../../../../challenges/types";
import { useSolutionsQuery } from "../../../../indexed-db/db";

interface InstructionsProps {
  challenge?: Challenge;
}

export const Instructions: FC<InstructionsProps> = ({ challenge }) => {
  const { solutions, isLoading } = useSolutionsQuery();
  const levelBadge = {
    easy: "info",
    medium: "warning",
    hard: "danger",
  };

  if (!challenge || isLoading) {
    return null;
  }

  const t = challenge.instructions;

  return (
    <Row className="mt-5">
      <Col sm={12} xl={8} className="mx-auto">
        <Card>
          <Card.Body>
            <h2 className="display-6">{challenge.title}</h2>
            <Stack direction="horizontal" gap={2}>
              {!!solutions.find((solution) => solution.id === challenge.id) && (
                <Badge bg="success">completed</Badge>
              )}
              {!!levelBadge[challenge.level as keyof typeof levelBadge] && (
                <Badge
                  bg={levelBadge[challenge.level as keyof typeof levelBadge]}
                >
                  {challenge.level}
                </Badge>
              )}
              {challenge.tags.map((tag) => (
                <Badge key={tag} bg="secondary">
                  {tag}
                </Badge>
              ))}
            </Stack>

            <Markdown
              className="mt-4"
              children={t}
              components={{
                code(props) {
                  const { children, className, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      language={match[1]}
                      PreTag="div"
                    />
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
