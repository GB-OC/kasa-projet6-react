import React from 'react';
import recifImage from './recif.png';
import './home.css';
import 'typeface-montserrat';

// Import des composants des cartes
import Card from '../../components/Cards/cards'; // Ajustez le chemin d'importation

function Home() {
  return (
    <div className="container">
      <div className="banner-container">
        <img src={recifImage} alt="Bannière" className="banner" />
        <div className="banner-text">
          Chez vous, partout et ailleurs
        </div>
      </div>
      <div className="gray-square">
        {/* Insérez les composants des cartes ici */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
