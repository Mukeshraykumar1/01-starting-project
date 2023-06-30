import React from "react";

const Movie = (props) => {
  return (
    <div className="my-3 mx-auto" style={{ maxWidth: "600px" }}>
      <li
        className="p-2"
        style={{
          backgroundColor: "#b700ff",
          textAlign: "center",
          color: "white",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ fontSize: "2rem", color: "yellow" }}>{props.title}</h2>
        <h3>{props.releaseDate}</h3>
        <p>{props.openingText}</p>
      </li>
    </div>
  );
};

export default Movie;
