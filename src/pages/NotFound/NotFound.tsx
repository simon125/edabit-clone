import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import NOT_FOUND from "../../assets/not_found.svg";
import { Link } from "react-router-dom";

export const NotFound: FC = () => {
  return (
    <Row>
      <Col sm={12} className="d-flex justify-content-center">
        <img className="w-50 d-block" src={NOT_FOUND} alt="404" />
      </Col>
      <Col sm={12} className="d-flex justify-content-center mt-5">
        <Link to="/exercises" className="btn btn-success btn-lg">
          Go to the home page
        </Link>
      </Col>
    </Row>
  );
};
