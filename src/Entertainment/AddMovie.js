import React, { useEffect, useState, useCallback } from "react";

import MovieList from "./MovieList";
import { Button, Row, Col } from "react-bootstrap";
import AddMovie from "./AddMovies";
import MovieCard from "./MovieCard";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(false);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://ecommerse-cf0c8-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong....Retrying");
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler(setMovies, setIsLoading, setError, setRetry);
  }, [fetchMovieHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://ecommerse-cf0c8-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  let content = (
    <p style={{ marginLeft: "39.8rem", marginTop: "0.5rem" }}>
      No Movies Found
    </p>
  );

  if (movies.length > 0) {
    content = <MovieList movies={movies} />;
    content = (
      <Row
        className="row"
        style={{
          textAlign: "center",
        }}
      >
        {movies.map((movie) => (
          <Col className="col-md-4" key={movie.id}>
            <MovieCard movie={movie}/>
          </Col>
        ))}
      </Row>
    );
  }

  const cancelRetrying = () => {
    content = <p></p>;
    setError(null);
    setRetry(false);
  };

  if (error) {
    content = (
      <div>
        {" "}
        {`${error}`}{" "}
        <Button variant="outline-danger" onClick={cancelRetrying}>
          {" "}
          cancel
        </Button>{" "}
      </div>
    );
  }

  useEffect(() => {
    if (retry) {
      const timer = setTimeout(() => {
        fetchMovieHandler(setMovies, setIsLoading, setError, setRetry).setRetry(
          false
        );
        console.log("retrying..");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [retry, fetchMovieHandler]);

  if (isLoading) {
    content = (
      <p style={{ marginLeft: "41.5rem", marginTop: "1rem" }}>Loading...</p>
    );
  }

  return (
    <>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <Button
          style={{ marginLeft: "40rem", marginTop: "1rem" }}
          onClick={fetchMovieHandler}
        >
          Fetch Movies
        </Button>
      </section>
      <section>{content}</section>
    </>
  );
};
export default MoviePage;
