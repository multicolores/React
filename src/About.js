import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://ghibliapi.herokuapp.com/films");
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  return (
    <div className="div_about">
      {items.map((item) => (
        <div>
          <h1 key={item.id}>
            <Link to={"/about/" + item.id}>{item.title}</Link>
          </h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default About;
