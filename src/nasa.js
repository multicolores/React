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

function Nasa() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState({
    photos: [{}],
  });

  const fetchItems = async () => {
    const data = await fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=879VsGPG3ZdGHRfceqw9hLfNhu4mS60JmtGGBhNK"
    );
    const items = await data.json();
    console.log(items);
    setItems(items);
    console.log(items.photos[5].img_src);
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
      <h1>Image Rover</h1>
      <h1>{items.photos[0].earth_date}</h1>
      <img src={items.photos[0].img_src} alt="" />
    </motion.div>
  );
}

export default Nasa;
