import React, { useState, useEffect } from "react";
import "./App.scss";

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
    <div className="div_about">
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
    </div>
  );
}

export default Meteo;
