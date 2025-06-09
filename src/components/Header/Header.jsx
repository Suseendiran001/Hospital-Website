import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <div className="logo-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="cross">+</span>
              </div>
              <div className="logo-text">
                <span className="logo-name">HealthCare</span>
                <span className="logo-tagline">Excellence in Care</span>
              </div>
            </Link>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link 
                  to="/" 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/about" 
                  className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/services" 
                  className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/doctors" 
                  className={`nav-link ${isActive('/doctors') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Doctors
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link 
                  to="/testimonials" 
                  className={`nav-link ${isActive('/testimonials') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Testimonials
                </Link>
              </li> */}
              <li className="nav-item">
                <Link 
                  to="/contact" 
                  className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
            
            <div className="nav-cta">
              <Link 
                to="/appointment" 
                className="btn btn-primary"
                onClick={closeMenu}
              >
                Book Appointment
              </Link>
            </div>
          </nav>

          <button 
            className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
