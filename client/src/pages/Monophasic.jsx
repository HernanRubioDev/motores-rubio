import { useNavigate } from "react-router-dom";
import sessionContext from "../context/UserContext";
import { useContext, useEffect } from "react";

const Monophasic = ()=>{

  const navigate = useNavigate();
  const {session} = useContext(sessionContext)

  useEffect(()=>{
    if(!session.auth_token) navigate("/")
  },[session])

  return(
  <main className='vh-100 d-flex flex-column'>

  </main>
  );
}

export default Monophasic