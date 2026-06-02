import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="home-navbar">
      <div className="home-container nav-inner">
        <Link to="/" className="brand">
          Evently
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <a href="#top">Home</a>
          <a href="#events">Events</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <Link to="/login" className="btn btn-ghost">Login</Link>
          <Link to="/register" className="btn btn-primary">Get Started</Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="home-container mobile-menu" role="dialog" aria-label="Mobile menu">
          <a href="#top" onClick={toggleMenu}>Home</a>
          <a href="#events" onClick={toggleMenu}>Events</a>
          <a href="#how-it-works" onClick={toggleMenu}>How It Works</a>
          <a href="#pricing" onClick={toggleMenu}>Pricing</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
          <div className="mobile-actions">
            <Link to="/login" className="btn btn-ghost" onClick={toggleMenu}>Login</Link>
            <Link to="/register" className="btn btn-primary" onClick={toggleMenu}>Get Started</Link>
          </div>
        </div>
      )}
    </header>
  );
}
