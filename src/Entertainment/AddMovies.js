import React, { useRef } from "react";

// import classes from "./AddMovies.module.css";
import { Button, Card, Form } from "react-bootstrap";
// import MovieCard from "./MovieCard";

function AddMovie(props) {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <div className="my-3 mx-auto" style={{ maxWidth: "600px" }}>
      <Card className="p-3">
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                id="title"
                ref={titleRef}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                id="opening-text"
                ref={openingTextRef}
                required
              />
            </Form.Group>

            <Form.Group controlId="formReleaseDate">
              <Form.Label>Release Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter release date"
                id="date"
                ref={releaseDateRef}
                required
              />
            </Form.Group>

            <div className="d-grid gap-2 mt-3">
              <Button variant="primary" type="submit">
                Add Movie
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AddMovie;
