import logoNoir from './LOGOnoir.png'; // Assurez-vous de spécifier le chemin correct vers votre image
import './footer.css'; 

function Footer(props) {
  const { margin } = props; // Ajout de la réception de la prop margin
  return (
    <footer className="footer" style={{ margin: margin }}>
      <div className="footer-content">
        <div className="logo-container">
          <img src={logoNoir} alt="Logonoir" className="logo-footer" />
        </div>
        <div className="copyright">© 2020 Kasa. All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
