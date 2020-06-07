import React, { createContext, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { HashRouter, Route, Switch } from "react-router-dom";
import Auth from "./pages/Auth";
import Logout from "./pages/Logout";

export const UserContext = createContext({});

const App = () => {

  const [token, setToken] = useState(localStorage.getItem("token"));

  const onClickLogin = () => {
    setToken(localStorage.getItem("token"));
  }

  const onClickLogout = () => {
    localStorage.removeItem("token");
    setToken(localStorage.getItem("token"));
  }

  return (
    <UserContext.Provider value={{ token, login: onClickLogin, logout: onClickLogout }}>
      <HashRouter>
        <Header/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/login"><Auth/></Route>
          <Route path="/logout"><Logout/></Route>
        </Switch>
        <Footer/>
      </HashRouter>
    </UserContext.Provider>
  );
};

export default App;
