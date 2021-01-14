import React from 'react';
import {Link} from "react-router-dom"
import "../Styles/Navbar.css"
const Navbar = () => {
    return (
        <nav>
          <ul className="nav-links">
              <Link to="/order/calzone"  className="nav-link">
                <li>calzone</li>
              </Link>
              <Link to="/" className="nav-link">
                <li>home</li>
              </Link>
              <Link to="/order/pizza" className="nav-link" >
                <li>pizza</li>
              </Link>
              <Link to="/ingredients" className="nav-link">
                 <li>ingridients</li>
              </Link>
          </ul>
      </nav>
    );
  };
export default Navbar;