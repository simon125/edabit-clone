import { FC } from "react";
import { Button, Modal } from "react-bootstrap";
import { clearSolutions } from "../../../../indexed-db/db";
import { toast } from "react-toastify";

interface ResetProgressModalProps {
  onHide: () => void;
  showModal: boolean;
}

export const ResetProgressModal: FC<ResetProgressModalProps> = ({
  showModal,
  onHide,
}) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showModal}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Jesteś pewien że chcesz zresetować obecny progress?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Usuwajac aktualny progress usuniesz z pamięci przeglądarki swoje
          rozwiązania do wszystkich zadań.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() =>
            clearSolutions()
              .then(() => {
                toast("Aktualny progress zresetowany pomyślnie!");
              })
              .catch(() => {
                toast(
                  "Coś poszło nie tak - niestety nie udało się zresetować progressu!"
                );
              })
              .finally(onHide)
          }
        >
          Tak usuń aktualny progress
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Nie chce zostawić wszystko tak jak jest
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
