import { FC } from "react";
import { Col, Row } from "react-bootstrap";

import HERO_IMG from "../../assets/exercises.svg";
import { Link } from "react-router-dom";

export const Home: FC = () => {
  return (
    <Row className="align-items-center mt-5 pt-5 justify-content-center gap-5 justify-content-md-around ">
      <Col sm={12} md={6} lg={5}>
        <h1
          className="display-6 text-dark text-center text-md-start "
          style={{ lineHeight: 1.4 }}
        >
          <span
            style={{
              borderBottom: "2px solid #198754",
            }}
          >
            Witaj na platformie
          </span>
          <br />
          <span
            style={{
              borderBottom: "2px solid #198754",
            }}
          >
            Edabit-Clone
          </span>
        </h1>
        <p className="lead mt-3 text-center text-md-start ">
          Aplikacja pozwalająca{" "}
          <b>ćwiczyć, uczyć się i utrwalać umiejętności</b> programistyczne.{" "}
          <b>Dzięki aplikacji</b> stworzysz różne funkcje <b>JavaScript</b>owe
          które będziesz wykorzystywać w swojej codziennej pracy
        </p>
        <Link
          to="/exercises"
          className="btn btn-success btn-lg mt-4 d-block mx-auto m-md-0"
          style={{ width: "fit-content" }}
        >
          Chcę ćwiczyć z Edabit-Clone
        </Link>
      </Col>
      <Col sm={12} md={5}>
        <img className="w-100" src={HERO_IMG} alt="" />
      </Col>
    </Row>
  );
};
