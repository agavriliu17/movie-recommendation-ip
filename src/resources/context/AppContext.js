import { createContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const authenticateUser = () => {
    localStorage.setItem("isAuthenticated", true);
  };

  const logoutUser = () => {
    localStorage.setItem("isAuthenticated", false);
  };

  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return (
    <AppContext.Provider
      value={{ isAuthenticated, authenticateUser, logoutUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
