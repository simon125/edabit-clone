import { FC } from "react";
import { Col, Row } from "react-bootstrap";

export const About: FC = () => {
  return (
    <Row>
      <Col>
        <h2 className="display-6">Witaj na klonie platformy Edabit</h2>
        <p className="lead">
          Platformie stworzonej na potrzeby przeprowadzania ćwiczeń z JSa a w
          przyszyłych wersjach do trenowania innych technologii frontendowych.
        </p>
        <p className="lead">
          Platforma jest w fazie testów i nie jest pozbawiona błędów - jest to
          jednak naturalna kolej rzeczy dlatego jeżeli zauważysz jakiś błąd lub
          nie ścisłość będę bardzo wdzięczny za udzielenie mi tej informacji 😊
        </p>
        <p className="lead">
          Projekt wizualnie i "mechanicznie" jest inspirowany stroną Edabit z
          oczywistymi dopasowaniami niektórych funkcjonalności.
        </p>
        <p className="lead">
          Jeżeli masz pomysł jak udoskonalic aplikację lub masz pomysł na jakieś
          zadanie które chciałbyś zobaczyć na platformie daj znać
        </p>
        <p className="lead">
          Aplikacja wykorzstuje pamięć przeglądarki do przechowania progresu a
          dokładnie wykorzystuje przestrzeń z <b>IndexedDB</b>w razie potrzeby
          zwolnienia tej pamięci wystaczy że klikniesz przycisk{" "}
          <b>Reset Progress</b>
          na stronie z ćwiczeniami i potwierdzisz chęć wykonania operacji.
        </p>
        <p className="lead">
          Żeby się ze mną skontaktować zapraszam na mojego linkedin-a klikając w
          poniższy link
        </p>
        <a
          className="btn btn-success"
          rel="noopener noreferrer nofollow"
          href="https://www.linkedin.com/in/szymon-oleszek/"
          target="_blank"
        >
          Linkedin Szymon Oleszek
        </a>
      </Col>

      <footer
        style={{
          position: "fixed",
          bottom: 5,
          padding: 20,
          left: 0,
          right: 0,
          textAlign: "center",
          borderTop: "1px solid #aaa",
        }}
      >
        Made on 💻, with little help from 🐈 and definitely with ❤️
      </footer>
    </Row>
  );
};
