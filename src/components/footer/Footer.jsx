import { Link } from "react-router-dom";
import "./footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-media-icons">
          <div className="footer-social-media-icon">
            <i
              style={{ color: "var(--primary-color)" }}
              className="bi bi-instagram"
            ></i>
          </div>
          <div className="footer-social-media-icon">
            <i
              style={{ color: "var(--primary-color)" }}
              className="bi bi-telegram"
            ></i>
          </div>
          <div className="footer-social-media-icon">
            <i
              style={{ color: "var(--primary-color)" }}
              className="bi bi-facebook"
            ></i>
          </div>
          <div className="footer-social-media-icon">
            <i
              style={{ color: "var(--primary-color)" }}
              className="bi bi-youtube"
            ></i>
          </div>
          <div className="footer-social-media-icon">
            <i
              style={{ color: "var(--primary-color)" }}
              className="bi bi-twitter"
            ></i>
          </div>
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Usefull Links</h3>
          <ul className="footer-links">
            <li className="footer-link">
              <Link to="/">Home</Link>
            </li>
            <li className="footer-link">
              <Link to="/authors">Authors</Link>
            </li>
            <li className="footer-link">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="footer-link">
              <Link to="/about">About Us</Link>
            </li>
            <li className="footer-link">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Contact Information</h3>
          <div className="footer-address-wrapper">
            <div className="footer-address-item">
              <i className="bi bi-geo-alt-fill"></i>
              Al-Dakahlia
            </div>
            <div className="footer-address-item">
              <i className="bi bi-telephone-fill"></i>
              01068730939
            </div>
            <div className="footer-address-item">
              <i className="bi bi-envelope-fill"></i>
              amr.zayed.205@gmail.com
            </div>
          </div>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">About Us</h3>
          <p className="footer-description">
            React Book Store is a simple and modern web project built with
            React.js to make browsing and buying books easier. It’s designed to
            offer users a fast and friendly experience, whether they’re
            searching for novels, textbooks, or anything in between. This
            project aims to combine clean design with efficient functionality,
            serving as a starting point for a full-featured online bookstore.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
