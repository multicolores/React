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

//     API : https://weatherstack.com/quickstart

function Meteo() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState({
    location: {},
    current: {},
  });

  const fetchItems = async () => {
    const data = await fetch(
      "http://api.weatherstack.com/current?access_key=46c90d8d97706206caeb980133b5521a&query=Saint-Quentin"
    );
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
      <h1>Météo</h1>
      <img src={items.current.weather_icons} alt="" />
      <h1>
        {items.current.temperature}°C , {items.current.weather_descriptions}
      </h1>
      <h4>{items.location.name}</h4>
      <h4>{items.location.localtime}</h4>
      <p>
        {items.location.name}, {items.location.country}, {items.location.region}
      </p>
    </motion.div>
  );
}

export default Meteo;
