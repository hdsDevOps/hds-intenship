import React, { useContext, useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../models";

const context = createContext({});

export function useUserDetails() {
  return useContext(context);
}

const userContext = ({ children }: Layout) => {
  let navigate = useNavigate();
  const [user, setUser] = useState<{}>({
    userName: "",
    isLoggedIn: false,
  });

  useEffect(() => {
    if (localStorage.getItem("name")) {
      loginUser();
    }
  }, []);

  const loginUser = () => {
    setUser({
      userName: "",
      isLoggedIn: true,
    });

    navigate("/");
  };
  const logoutUser = () => {
    setUser({
      userName: "",
      isLoggedIn: false,
    });

    navigate("/");
  };

  let values = {
    user,
    loginUser,
    logoutUser,
  };
  return <context.Provider value={values}>{children}</context.Provider>;
};

export default userContext;
