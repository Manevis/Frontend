import React from "react";

export const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  const user = {
    username: "truemoein"
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
