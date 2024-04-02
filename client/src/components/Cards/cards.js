import './cards.sass'; 
import { Link } from 'react-router-dom';


function Card({ cover, title, id }) {
  return (
    <Link to={`/listing-detail/${id}`}>
      <div className="card" style={{ backgroundImage: `url(${cover})` }}>
        <div className="card-content">
          <span className="location-title">{title}</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;