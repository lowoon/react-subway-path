import React, { useContext, useState } from "react";
import { loginRequest } from '../util/fetch';
import { useHistory } from "react-router-dom";
import { UserContext } from '../App';

const Auth = () => {
    const history = useHistory();
    const { login } = useContext(UserContext);
    const [input, setInput] = useState({ email: "", password: "" });

    const changeInput = e => {
      setInput({ ...input, [e.target.name]: e.target.value });

    };

    const onClickLogin = e => {
      e.preventDefault();

      loginRequest(input)
      .then(res => {
          localStorage.setItem("token", `Token ${res.user.token}`);
          login();
          history.push("/");
        }
      );
    }

    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Login</h1>
              <form>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={changeInput}
                    value={input.email}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={changeInput}
                    value={input.password}
                  />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right" onClick={onClickLogin}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
;

export default Auth;
