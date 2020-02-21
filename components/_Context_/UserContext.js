import React, { useState } from "react";
import { removeItem, setItem } from "../../utils/storage";
import { destroyCookie } from "nookies";

export const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUserState] = useState(null);

  const setUser = receivedUser => {
    if (receivedUser) {
      setItem("user", receivedUser);
    } else {
      removeItem("user");
      destroyCookie(null, "token");
    }

    setUserState(receivedUser);
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
