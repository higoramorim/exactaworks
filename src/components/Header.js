import React from 'react';

const Header = ({ items }) => {
  return (
    <header className="header">
      <nav className="nav">
        {items.map(({ label, path }, index) => (
          <a
            className="nav__item"
            href={path}
            key={index}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;