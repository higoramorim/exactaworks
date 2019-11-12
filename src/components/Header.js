import React from 'react';

const Header = ({ items }) => {
  return (
    <header className="header">
      <nav className="nav">
        {items.map(({ title, path }, index) => (
          <a
            className="nav__item"
            href={path}
            key={index}
          >
            {title}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;