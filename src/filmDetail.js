import React, { useState, useEffect } from "react";
import "./App.scss";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100%",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100%",
    scale: 1.2,
  },
};
const pageTransition = {
  duration: 1,
  ease: "anticipate",
};

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
    <motion.div
      style={{ position: "absolute", width: "100%", textAlign: "center" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>{item.title}</h1>
      <h3>
        Directed by {item.director}, producted by {item.producer} and release in{" "}
        {item.release_date}{" "}
      </h3>
      <p>{item.description}</p>
    </motion.div>
  );
}

export default FilmDetail;
