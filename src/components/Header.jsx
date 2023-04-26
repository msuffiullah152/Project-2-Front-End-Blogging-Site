import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
  <nav>
    <ul>
      <li class="dropdown">
          Menu
        <ul class="dropdown-content">
          <li>
          <NavLink to="/" className="nav-link" activeClassName="active-nav-link">
          Home
        </NavLink>
          </li>
          <li>
          <NavLink to="/create" className="nav-link" activeClassName="active-nav-link">
          Create
        </NavLink>
          </li>
          <li>
            <NavLink to="/posts" className="nav-link" activeClassName="active-nav-link">
              Blog
            </NavLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</header>

  );
};

export default Header;

