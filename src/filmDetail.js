import React, { useState, useEffect } from "react";
import "./App.css";

function FilmDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      "https://ghibliapi.herokuapp.com/films/" + match.params.id
    );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1>{item.title}</h1>
      <h3>
        Directed by {item.director}, producted by {item.producer} and release in{" "}
        {item.release_date}{" "}
      </h3>
      <p>{item.description}</p>
    </div>
  );
}

export default FilmDetail;
