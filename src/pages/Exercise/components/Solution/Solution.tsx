import { FC } from "react";
import { Accordion, Col, Row } from "react-bootstrap";

interface SolutionProps {
  solution: string;
}

export const Solution: FC<SolutionProps> = ({ solution }) => {
  return (
    <Row>
      <Col>
        <Accordion className="mt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Click to see example solution</Accordion.Header>
            <Accordion.Body>
              <pre>{solution}</pre>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
  );
};
