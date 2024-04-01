import React from 'react';
import { Link } from 'react-router-dom'; // Import de Link depuis react-router-dom
import logoSVG from './logo.svg';
import './header.css'; 

function Header(props) {
  const { margin } = props; // Ajout de la réception de la prop margin
  return (
    <header className="header" style={{ margin: margin }}> {/* Utilisation de la prop margin */}
      <div className="header-content">
        <div className="logo-container-top">
          <img src={logoSVG} alt="Logo de Kasa" className="logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Accueil</Link></li> {/* Utilisation de Link avec la prop "to" */}
            <li><Link to="/about">À propos</Link></li> {/* Utilisation de Link avec la prop "to" */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;