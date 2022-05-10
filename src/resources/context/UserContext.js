import { createContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("isAuthenticated")
  );

  const authenticateUser = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem("isAuthenticated", true);
  };

  const logoutUser = () => {
    setIsAuthenticated(false);
    sessionStorage.setItem("isAuthenticated", false);
  };

  return (
    <UserContext.Provider
      value={{ isAuthenticated, authenticateUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
