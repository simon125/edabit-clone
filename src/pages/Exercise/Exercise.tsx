import { FC, useEffect } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";

import { ResourcesPopover } from "./components/ResourcesPopover/ResourcesPopover";
import { Code } from "./components/Code/Code";
import { Instructions } from "./components/Instructions/Instructions";
import { useNavigate, useParams } from "react-router-dom";
import { challenges } from "../../challenges/challenges";
import { Solution } from "./components/Solution/Solution";

export const Exercise: FC = () => {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const challenge = challenges.find(({ id }) => params.id === id);

  useEffect(() => {
    const challenge = challenges.find(({ id }) => params.id === id);

    if (!challenge) {
      navigate("/not-found");
    }
  }, [params.id, navigate]);

  return (
    <Row>
      <Col>
        <Tabs
          defaultActiveKey="Instructions"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Instructions" title="Instructions">
            <Instructions challenge={challenge} />
          </Tab>
          <Tab eventKey="Code" title="Code">
            <Code />
          </Tab>
          {/* <Tab eventKey="Resources" title="Resources">
            Resources
          </Tab> */}
          <Tab
            eventKey="Solution"
            title={
              <ResourcesPopover>
                <span>Solution</span>
              </ResourcesPopover>
            }
          >
            <Solution solution={challenge?.solution || ""} />
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
};
