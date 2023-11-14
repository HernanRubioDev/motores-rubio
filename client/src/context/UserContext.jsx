import { createContext, useState } from "react";

const sessionContext = createContext();

const SessionProvider = ({children}) =>{
  const intialSession = {
    auth_token: localStorage.getItem("auth_token") || false,
    username: localStorage.getItem("username") || '',
    name:localStorage.getItem("name") || '',
    surname:localStorage.getItem("surname") || ''
  }
  const [session, setSession] = useState(intialSession);
  
  const handleSession = (login)=>{
    setSession(login)
  }

  const data = {session, handleSession}
  return(
    <sessionContext.Provider value={data}>{children}</sessionContext.Provider>
  );
}

export {SessionProvider};
export default sessionContext;