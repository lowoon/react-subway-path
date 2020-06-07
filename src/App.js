import React, { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { HashRouter, Route, Switch } from "react-router-dom";
import Auth from "./pages/Auth";
import { authRequest } from "./util/fetch";
import Logout from "./pages/Logout";

export const UserContext = createContext({});

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authorize = async () => {
      const data = await authRequest();
      setUser(data.user);
    };
    if (localStorage.getItem("token")) {
      authorize();
    }
  }, []);

  return (
    <UserContext.Provider value={{
      user,
      logout: () => {
        localStorage.removeItem("token");
      },
      login: ({ user }) => {
        localStorage.setItem("token", user.token);
        setUser(user);
      }
    }}>
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
