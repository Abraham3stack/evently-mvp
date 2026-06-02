import { Link } from 'react-router-dom';

export default function OrganizerTopbar() {
  return (
    <header className="org-topbar">
      <div className="org-topbar-inner">
        <Link to="/" className="org-logo">
          Evently
        </Link>
        <nav className="org-topbar-nav" aria-label="Primary">
          <a href="/">Home</a>
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <div className="org-topbar-actions">
          <Link to="/login" className="org-btn org-btn-outline">Log in</Link>
          <Link to="/organizer/create-event" className="org-btn org-btn-primary">Host an Event</Link>
        </div>
      </div>
      <div className="org-topbar-divider" />
    </header>
  );
}
