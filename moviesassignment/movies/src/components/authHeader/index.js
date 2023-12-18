import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

const AuthHeader = (props) => {
  const context = useContext(AuthContextProvider);

  const navigate = useNavigate();

  return context.isAuthenticated ? (
    <p>
      Welcome {context.userName}!{" "}
      <button onClick={() => context.signout()}>Sign out</button>
    </p>
  ) : (
    <p>
      You are not logged in{" "}
      <button onClick={() => navigate("login")}>Login</button>
    </p>
  );
};

export default AuthHeader;