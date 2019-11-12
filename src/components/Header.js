import React from 'react';

const Header = ({ items }) => {
  return (
    <header class="header">
      <nav class="nav">
        {items.map(({ title, path }) => (
          <a href={path} class="nav__item">{title}</a>
        ))}
      </nav>
    </header>
  );
}

export default Header;