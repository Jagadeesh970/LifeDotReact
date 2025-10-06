import { createContext, useState } from "react";

export const AuthStore=createContext({});
const AuthStoreProvider = (props) => {
  const [loginPop,setLoginPop]=useState(false);
  const StoreVal={
    loginPop,
    setLoginPop
  }
  return (
    <AuthStore.Provider value={StoreVal}>
        {props.children}
    </AuthStore.Provider>
  )
}

export default AuthStoreProvider;
