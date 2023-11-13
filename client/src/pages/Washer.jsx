import { useNavigate } from "react-router-dom";
import sessionContext from "../context/UserContext";
import { useContext, useEffect } from "react";
import Header from "../components/Header";
import InfoToast from "../components/InfoToast";
import useWasher from "../hooks/useWasher";
//import WasherMain from "../components/washer/WasherMain";

const Washer = ()=>{

  const navigate = useNavigate();
  const {session} = useContext(sessionContext)
  const {loading, response, registerWasher} = useWasher()

  useEffect(()=>{
    if(!session.auth_token) navigate("/")
  },[session])

  return(
    <main className='vh-100 d-flex flex-column overflow-hidden'>
      <Header />
    </main>
  );
}

export default Washer