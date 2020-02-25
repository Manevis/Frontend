import React, { useState, useEffect } from "react";
import {
  clearStorage,
  getItem,
  removeItem,
  setItem
} from "../../utils/storage";
import { removeAllCookies } from "../../utils/cookie";
import { setCookie } from "nookies";

export const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUserState] = useState(null);

  const setUser = (receivedUser, token) => {
    if (receivedUser) {
      setItem("user", receivedUser);
      if (token) {
        setCookie({}, "token", token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/"
        });
      }
    } else {
      removeAllCookies();
      clearStorage();
    }

    setUserState(receivedUser);
  };

  const listenToLogoutEvent = () => {
    window.addEventListener("storage", () => {
      if (getItem("logout")) {
        setUser(null);
        removeItem("logout");
      }
    });
  };

  useEffect(() => {
    listenToLogoutEvent();
    const user = getItem("user");
    if (user) setUser(user);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
