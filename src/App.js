import React from "react";

import Home from "./pages/Home";
import Search from './pages/Search';
import Layout from "./components/Layout";

import "./assets/service/css/app.css";
import { Route } from 'react-router-dom';

const App = () => (
  <Layout>
    <Route path={"/"} exact component={Home}/>
    <Route path={"/search"} exact component={Search}/>
  </Layout>
);

export default App;
