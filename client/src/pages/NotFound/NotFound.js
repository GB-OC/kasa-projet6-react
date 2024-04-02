import { Link } from 'react-router-dom';
import './NotFound.css'; 


function NotFound() {
  return (
    <div className="not-found">
      <div className="title">
        <h2>404</h2>
      </div>
      <div className="message">
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <div className="link">
        <Link to="/" className="home-link">
          <span>Retournez sur la page d'accueil</span>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
