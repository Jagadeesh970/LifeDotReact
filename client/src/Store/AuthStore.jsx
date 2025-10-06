import { createContext, useState, useEffect } from "react";

export const AuthStore = createContext({});

const AuthStoreProvider = ({ children }) => {
 
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [loginPop, setLoginPop] = useState(!!user);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setLoginPop(true);
    } else {
      localStorage.removeItem("user");
      setLoginPop(false);
    }
  }, [user]);

  const store = {
    loginPop,
    setLoginPop,
    user,
    setUser
  };

  return <AuthStore.Provider value={store}>{children}</AuthStore.Provider>;
};

export default AuthStoreProvider;
