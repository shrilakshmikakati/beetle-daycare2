import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="full-width-header">
      <div className="nav-container">
        <div className="logo">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Beetle Daycare</Link>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/hours">Hours</Link>
          <Link to="/tuition">Tuition Rates</Link>
          <Link to="/parents">Letter to Parents</Link>
          <Link to="/apply">Apply</Link>
        </nav>
        <div className="nav-actions">
          <div className="search-icon">
            <Search size={18} color="#777" />
          </div>
          <Link to="/faq" className="btn btn-primary">Get In Touch</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
