import React, { useState } from "react";
import { setItem } from "../../utils/storage";

export const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUserState] = useState(null);

  const setUser = receivedUser => {
    setItem("user", receivedUser);
    setUserState(receivedUser);
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
