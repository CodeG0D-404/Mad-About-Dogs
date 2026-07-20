import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CalendarDays,
  Clock,
  Dog,
  Heart,
  Home,
  Mail,
  MapPin,
  PawPrint,
  Phone,
  ShoppingBag,
} from "lucide-react";

import logo from "../assets/logo.png";
import "./CSS/Footer.css";

const Footer = () => {
  const [showMobileFooter, setShowMobileFooter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowMobileFooter(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) =>
    location.pathname.startsWith(path);

  return (
    <>
      <footer className="footer desktop-footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <img src={logo} alt="Mad About Dogs" />
              </Link>

              <p>
                Providing trusted veterinary care, professional grooming,
                preventive healthcare, and compassionate support for pets
                and their families.
              </p>

              <div className="footer-badges" aria-label="Care highlights">
                <span>
                  <Heart />
                  Vet guided
                </span>
                <span>
                  <PawPrint />
                  Pet first
                </span>
              </div>
            </div>

            <div className="footer-column">
              <h4>Quick Links</h4>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/products">Products</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <Link to="/services/grooming">Grooming</Link>
              <Link to="/services/boarding">Boarding</Link>
              <Link to="/services/daycare">Day Care</Link>
              <Link to="/services/training">Training</Link>
            </div>

            <div className="footer-column footer-contact">
              <h4>Contact</h4>

              <p className="footer-contact-item">
                <Phone />
                <span>+91 XXXXX XXXXX</span>
              </p>
              <p className="footer-contact-item">
                <Mail />
                <span>hello@madaboutdogs.in</span>
              </p>
              <p className="footer-contact-item">
                <MapPin />
                <span>Your Business Address</span>
              </p>
              <p className="footer-contact-item">
                <Clock />
                <span>Open daily for pet care</span>
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              &copy; {new Date().getFullYear()} Mad About Dogs. All Rights
              Reserved.
            </span>
            <Link to="/booking">Book a visit</Link>
          </div>
        </div>
      </footer>

      <nav
        className={`mobile-footer ${
          showMobileFooter ? "show" : ""
        }`}
      >
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          <Home />
          <span>Home</span>
        </Link>

        <Link
          to="/booking"
          className={isActive("/booking") ? "active" : ""}
        >
          <CalendarDays />
          <span>Book</span>
        </Link>

        <Link
          to="/products"
          className={isActive("/products") ? "active" : ""}
        >
          <ShoppingBag />
          <span>Products</span>
        </Link>

        <Link
          to="/services"
          className={isActive("/services") ? "active" : ""}
        >
          <Dog />
          <span>Services</span>
        </Link>

        <Link
          to="/contact"
          className={isActive("/contact") ? "active" : ""}
        >
          <Phone />
          <span>Contact</span>
        </Link>
      </nav>
    </>
  );
};

export default Footer;
