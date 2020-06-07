import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">conduit</a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">Home</NavLink>
          </li>
          {user ? <li className="nav-item">
            <NavLink to="/logout" className="nav-link">Logout</NavLink>
          </li> : <li className="nav-item">
            <NavLink to="/login" className="nav-link">Login</NavLink>
          </li>}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
