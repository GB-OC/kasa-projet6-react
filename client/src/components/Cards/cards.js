import './cards.css'; // Importez le fichier CSS pour les styles de la carte

function Card() {
  return (
    <div className="card">
      <div className="card-content">
        {/* Contenu de la carte ici */}
        <span className="location-title">Titre de la location</span>
      </div>
    </div>
  );
}

export default Card;