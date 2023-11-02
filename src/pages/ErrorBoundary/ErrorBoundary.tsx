import { FC, ReactNode } from "react";
import { ErrorBoundary as ErrorBoundaryComponent } from "react-error-boundary";

import BUGS from "../../assets/fixing_bugs.svg";
import { Alert, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

interface FallbackComponentProps {
  error: { message: string };
  resetErrorBoundary: () => void;
}

function FallbackComponent({
  error,
  resetErrorBoundary,
}: FallbackComponentProps) {
  return (
    <Row>
      <Col sm={12}>
        <img className="w-50 d-block mx-auto" src={BUGS} alt="" />
      </Col>

      {error?.message ? (
        <Col sm={12} className="mt-5">
          <Alert variant="danger">
            <Alert.Heading>We're sorry!</Alert.Heading>
            {error.message}
            <div>
              <Link
                onClick={resetErrorBoundary}
                to="/exercises"
                className="btn btn-success mt-4"
              >
                Go back to safety
              </Link>
            </div>
          </Alert>
        </Col>
      ) : (
        <Col sm={12} className="d-flex justify-content-center ">
          <Link
            onClick={resetErrorBoundary}
            to="/exercises"
            className="btn btn-success btn-lg mt-4"
          >
            Go back to safety
          </Link>
        </Col>
      )}
    </Row>
  );
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

export const ErrorBoundary: FC<ErrorBoundaryProps> = ({ children }) => {
  return (
    <ErrorBoundaryComponent FallbackComponent={FallbackComponent}>
      {children}
    </ErrorBoundaryComponent>
  );
};
