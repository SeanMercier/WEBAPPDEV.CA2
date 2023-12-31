import React, { useState, createContext } from "react";
import { login, signup } from "../api/movie-api";

export const AuthContext = createContext({
  isAuthenticated: false,
  authenticate: () => {},
  register: () => {},
  signout: () => {},
  userName: "",
});

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const authenticate = async (username, password) => {
    try {
      const result = await login(username, password);
  
      if (result.token) {
        setToken(result.token);
        setIsAuthenticated(true);
        setUserName(username);
        return true; // Authentication successful     //MODIFIED AUTHENTICATE FUNCTION TO RETURN BOOLEAN
      } else {
        setIsAuthenticated(false);
        return false; // Authentication failed
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      setIsAuthenticated(false);
      return false; // Authentication failed due to an error
    }
  };
  

  const register = async (username, password) => {
    const result = await signup(username, password);
    console.log(result.code);
    return (result.code === 201) ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        userName
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;