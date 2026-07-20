import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [navVisible, setNavVisible] = useState<boolean>(true);
  const [isShrunk, setIsShrunk] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navRef = useRef<HTMLElement | null>(null);

  const closeAll = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      setIsShrunk(current > 40);

      if (window.innerWidth >= 992) {
        setNavVisible(true);
        return;
      }

      if (current < 100) {
        setNavVisible(true);
      } else {
        setNavVisible(current < lastScroll);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`navbar ${navVisible ? "show" : "hide"} ${
        isShrunk ? "shrink" : ""
      }`}
    >
      <div className="navbar-container">

        <Link to="/" className="logo" onClick={closeAll}>
          <img src={logo} alt="Mad About Dogs" />
        </Link>

        <div
          className={`hamburger ${mobileOpen ? "active" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </div>

        <ul className={`nav-links ${mobileOpen ? "active" : ""}`}>

          <li>
            <Link to="/" onClick={closeAll}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={closeAll}>
              About
            </Link>
          </li>

          <li className="dropdown">
            <button
              onClick={() => toggleDropdown("services")}
            >
              Services
            </button>

            <div
              className={`dropdown-menu ${
                openDropdown === "services"
                  ? "show"
                  : ""
              }`}
            >
              <Link
                to="/services/grooming"
                onClick={closeAll}
              >
                Grooming
              </Link>

              <Link
                to="/services/boarding"
                onClick={closeAll}
              >
                Boarding
              </Link>

              <Link
                to="/services/daycare"
                onClick={closeAll}
              >
                Day Care
              </Link>

              <Link
                to="/services/training"
                onClick={closeAll}
              >
                Training
              </Link>
            </div>
          </li>

          <li>
            <Link to="/products" onClick={closeAll}>
              Products
            </Link>
          </li>

          <li>
            <Link to="/blog" onClick={closeAll}>
              Blog
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeAll}>
              Contact
            </Link>
          </li>

          <li className="mobile-book-btn">
            <Link to="/booking" onClick={closeAll}>
              Book Now
            </Link>
          </li>
        </ul>

        <Link to="/booking" className="book-btn">
          Book Now
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;