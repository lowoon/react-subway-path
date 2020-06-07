import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from '../App';
import { authRequest } from '../util/fetch';

const Header = () => {
  const { token } = useContext(UserContext);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    authRequest()
    .then(res => setUserName(res.user.username))
  }, [])

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">conduit</Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item"><NavLink exact to="/" className="nav-link">Home</NavLink></li>
          {token ?
            <>
              <li className="nav-item"><NavLink to="/logout" className="nav-link">Logout</NavLink>
              </li>
              <li className="nav-item active"><NavLink to="/myInfo"
                                                       className="nav-link">{userName}</NavLink>
              </li>
            </>
            :
            <li className="nav-item"><NavLink to="/login" className="nav-link">Login</NavLink></li>
          }
        </ul>
      </div>
    </nav>
  );
};

export default Header;
