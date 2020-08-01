import React, { useState, useEffect } from "react";
import "./App.scss";

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
    <div className="div_about">
      <h1>Image Rover</h1>
      <h1>{items.photos[0].earth_date}</h1>
      <img src={items.photos[0].img_src} alt="" />
    </div>
  );
}

export default Nasa;
