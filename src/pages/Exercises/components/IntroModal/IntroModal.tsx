import { FC } from "react";
import { Button, Modal } from "react-bootstrap";

interface IntroModalProps {
  show: boolean;
  onClose: () => void;
}

export const IntroModal: FC<IntroModalProps> = ({ show, onClose }) => {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>Edabit-Clone intro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          style={{ width: "100%", height: 500 }}
          src="https://www.youtube.com/embed/7XzHDtjwhMg"
          title="Edabit Clone Intro"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Wow! Chcę zacząc ćwiczyć!
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
