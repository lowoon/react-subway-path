import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from '../App';

const Logout = () => {
  const { logout } = useContext(UserContext);

  useEffect(() => {
    const onClickLogout = () => {
      logout();
    };
    onClickLogout()
  }, [])

  return (
    <Redirect to="/"/>
  );
};

export default Logout;
