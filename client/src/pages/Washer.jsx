import { useNavigate } from "react-router-dom";
import sessionContext from "../context/UserContext";
import { useContext, useEffect } from "react";
import Header from "../components/Header";
import InfoToast from "../components/InfoToast";
import WasherMain from "../components/washer/WasherMain";
import useMotor from "../hooks/useMotor";

const Washer = ()=>{

  const navigate = useNavigate();
  const {session} = useContext(sessionContext)
  const {loading, response, registerMotor} = useMotor();

  useEffect(()=>{
    if(!session.auth_token) navigate("/")
  },[session])

  return(
    <main className='vh-100 d-flex flex-column overflow-hidden'>
      <Header />
      <WasherMain loading={loading} registerMotor={registerMotor}/>
      <InfoToast response={response}/>
    </main>
  );
}

export default Washer