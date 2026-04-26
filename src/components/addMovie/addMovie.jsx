import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddMovie({ add_movie }) {
  // état pour afficher ou cacher le modal
  const [show, setShow] = useState(false);

  // ouvrir / fermer le modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // états du formulaire
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [trailer, setTrailer] = useState("");

  // fonction pour ajouter un film
  const handleSubmit = (e) => {
    e.preventDefault();

    // création du nouveau film
    const newMovie = {
      id: Date.now(),
      title,
      rate,
      description,
      posterUrl,
      trailer,
    };

    // ajout du film dans la liste
    add_movie(newMovie);

    // vider les champs
    [setTitle, setDescription, setRate, setPosterUrl, setTrailer].forEach(
      (reset) => reset("")
    );

    // fermer le modal
    handleClose();
  };

  return (
    <div>
      {/* bouton pour ouvrir le modal */}
      <Button variant="dark" onClick={handleShow}>
        Add Movie
      </Button>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>

        {/* formulaire */}
        <Form onSubmit={handleSubmit}>
          <Modal.Body>

            {/* titre */}
            <Form.Group className="mb-3">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            {/* description */}
            <Form.Group className="mb-3">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            {/* note */}
            <Form.Group className="mb-3">
              <Form.Label>Rate:</Form.Label>
              <Form.Control
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={rate}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^[1-5]?$/.test(value)) {
                    setRate(value);
                  }
                }}
              />
            </Form.Group>

            {/* image */}
            <Form.Group className="mb-3">
              <Form.Label>Poster URL:</Form.Label>
              <Form.Control
                type="url"
                value={posterUrl}
                onChange={(e) => setPosterUrl(e.target.value)}
              />
            </Form.Group>

            {/* trailer */}
            <Form.Group className="mb-3">
              <Form.Label>Trailer:</Form.Label>
              <Form.Control
                type="url"
                value={trailer}
                onChange={(e) => setTrailer(e.target.value)}
              />
            </Form.Group>

          </Modal.Body>

          <Modal.Footer>
            {/* fermer */}
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

            {/* enregistrer */}
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default AddMovie;