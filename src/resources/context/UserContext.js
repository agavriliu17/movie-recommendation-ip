import { createContext, useState, useEffect } from "react";
import { getUserDetails } from "../helpers/authHelper";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [loginMessage, setLoginMessage] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("isAuthenticated")
  );
  const [userData, setUserData] = useState({});

  useEffect(() => {
    (async function () {
      try {
        const data = await getUserDetails();
        setUserData(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

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
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
