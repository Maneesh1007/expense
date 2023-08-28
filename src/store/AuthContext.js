import React, { createContext, useState, useEffect } from "react";
//import jwtDecode from "jwt-decode";

const AuthContext = createContext({
  token: "",
  isLogged: false,
  loginHandler: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  //const [tokenExpiration, setTokenExpiration] = useState(null);

  const isLogged = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    //const decodedToken = jwtDecode(token);
    //setTokenExpiration(decodedToken.exp * 1000); // Convert seconds to milliseconds
  };

  const logout = () => {
    setToken("");
    //setTokenExpiration(null);
    localStorage.removeItem("token");
  };

  // useEffect(() => {
  // if (tokenExpiration) {
  // const currentTime = new Date().getTime();
  //if (currentTime > tokenExpiration) {
  //  logout();
  // }
  // }
  // }, [tokenExpiration]);

  const contextValue = {
    token: token,
    isLogged: isLogged,
    login: loginHandler,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
