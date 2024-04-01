import React from "react";
import Collapsible from "../../components/Collapsible/Collapsible.js";
import aboutImage from "./about.png";
import "./About.css";

function About() {
  return (
    <div className="container">
      <div className="banner-container">
        <img src={aboutImage} alt="Bannière" className="banner" />
      </div>
      <div className="collapsible-container">
        <Collapsible title="Fiabilité" text="Nous sommes une plateforme de location d'appartements fiable et digne de confiance. Nous nous engageons à respecter nos engagements et à fournir des services de qualité supérieure à nos clients." />
        <Collapsible title="Respect" text="Nous respectons nos clients et leurs besoins. Nous nous engageons à fournir un service professionnel et courtois à chaque fois." />
        <Collapsible title="Service" text="Nous offrons un service exceptionnel à nos clients. Nous sommes toujours à l'écoute de leurs besoins et nous nous adaptons en conséquence." />
        <Collapsible title="Sécurité" text="Nous prenons la sécurité très au sérieux. Nous nous assurons que toutes les mesures de sécurité nécessaires sont en place pour protéger nos clients et leurs biens." />
      </div>
    </div>
  );
}

export default About;