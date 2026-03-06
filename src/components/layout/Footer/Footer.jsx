import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>DizZine es un sitio de construction de poster para ciudades</p>
        <a href="#">2024 publicado por DizZine</a>
      </div>
      <a href="#privacy" className="footer-privacy">
        Política de privacidad
      </a>
    </footer>
  );
};
