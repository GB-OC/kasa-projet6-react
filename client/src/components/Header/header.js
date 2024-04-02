import React from 'react';
import { Link } from 'react-router-dom'; 
import logoSVG from './logo.svg';
import './header.sass'; 

function Header(props) {
  const { margin } = props; 
  return (
    <header className="header" style={{ margin: margin }}> 
      <div className="header-content">
        <div className="logo-container-top">
          <img src={logoSVG} alt="Logo de Kasa" className="logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Accueil</Link></li> 
            <li><Link to="/about">À propos</Link></li> 
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;