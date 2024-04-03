import logoNoir from './LOGOnoir.png'; 
import './footer.sass'; 

function Footer(props) {
  const { margin } = props; 
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
