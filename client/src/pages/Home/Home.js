import React from "react";
import recifImage from "./recif.png";
import "./home.css";
import "typeface-montserrat";
import data from "../../data.json";

import Card from "../../components/Cards/cards";

function Home() {
  const cards = data
    .slice(0, 6)
    .map((item) => <Card key={item.id} {...item} />);

  return (
    <div className="container">
      <div className="banner-container">
        <img src={recifImage} alt="Bannière" className="banner" />
        <div className="banner-text">Chez vous, partout et ailleurs</div>
      </div>
      <div className="gray-square">{cards}</div>
    </div>
  );
}

export default Home;
