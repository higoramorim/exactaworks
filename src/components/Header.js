import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ items }) => {
  return (
    <header className="header">
      <nav className="nav">
        {items.map(({ label, path }, index) => (
          <Link
            className="nav__item"
            to={path}
            key={index}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;