import { createContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [loginMessage, setLoginMessage] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("isAuthenticated")
  );

  const authenticateUser = (token) => {
    setIsAuthenticated(token);
    sessionStorage.setItem("isAuthenticated", token);
  };

  const logoutUser = () => {
    setIsAuthenticated("");
    sessionStorage.setItem("isAuthenticated", "");
  };

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        authenticateUser,
        logoutUser,
        loginMessage,
        setLoginMessage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
