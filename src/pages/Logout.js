import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
  const { logout } = useContext(UserContext);
  useEffect(() => {
    localStorage.removeItem("token");
    logout();
  }, []);
  return (
    <Redirect to="/"></Redirect>
  );
};

export default Logout;
