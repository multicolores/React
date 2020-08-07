import React, { useState, useEffect } from "react";
import "./App.scss";
import { Link } from "react-router-dom";
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
    <motion.div
      className="div_about"
      style={{ position: "absolute", width: "100%", textAlign: "center" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {items.map((item) => (
        <div>
          <h1 key={item.id}>
            <Link to={"/about/" + item.id}>{item.title}</Link>
          </h1>
          <p>{item.description}</p>
        </div>
      ))}
    </motion.div>
  );
}

export default About;
