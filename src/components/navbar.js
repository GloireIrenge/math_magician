import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Nav extends React.PureComponent {
  render() {
    return (
      <nav className="nav-area">
        <Link className="logo-container" to="/">
          <h3 className="app-name-logo">Mathemagician</h3>
        </Link>
        <div className="menu-container">
          <ul className="menu">
            <li><Link to="/" className="menu-option-style">Home</Link></li>
            <li className="calculator"><Link to="/calculator" className="menu-option-style">Calculator</Link></li>
            <li><Link to="/quotes" className="menu-option-style">Quotes</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Nav;
