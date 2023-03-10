import React, { useContext, useState, createContext, useEffect, ReactNode } from "react";
import { Layout } from "../models";

const context = createContext({});

export function useUserDetails() {
  return useContext(context);
}

export interface User {
  userName: string;
  isLoggedIn: boolean
}

const UserContextProvider = ({ children }: Layout) => {
  const [user, setUser] = useState<User>({
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
  };
  const logoutUser = () => {
    setUser({
      userName: "",
      isLoggedIn: false,
    });
  };

  let values = {
    user,
    loginUser,
    logoutUser,
  };
  return <context.Provider value={values}>{children}</context.Provider>;
};

export default UserContextProvider;
