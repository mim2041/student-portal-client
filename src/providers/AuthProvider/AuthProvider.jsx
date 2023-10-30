import axios from "axios";
import { useContext, useEffect, useMemo, useState } from "react";
import AuthContext from "../../contexts/AuthContext/AuthContext";
const AuthProvider = ({ children }) => {
  const [user, setUser_] = useState(
    localStorage.getItem("Chinta_User") || null
  );
  const [loading, setLoading] = useState(true);
  const [token, setToken_] = useState(
    localStorage.getItem("accessToken_JU")
  );

  const setToken = (newToken) => {
    console.log(newToken);
    setToken_(newToken);
  };
  const setUser = (user) => {
    setUser_(user);
  };
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "bearer " + token;
      localStorage.setItem("accessToken_Chinta", token);
      localStorage.setItem("Chinta_User", user);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("accessToken_SHDCL");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      user,
      setUser,
    }),
    [token, user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
