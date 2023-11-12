import { useNavigate } from "react-router-dom";
import sessionContext from "../context/UserContext";
import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import InfoToast from "../components/InfoToast";
import useMonophasic from "../hooks/useMonophasic";
import MonophasicMain from "../components/monophasic/monophasicMain";


const Monophasic = ()=>{
  const navigate = useNavigate();
  const {session} = useContext(sessionContext)
  const {loading, response, registerMonophasic} = useMonophasic()

  useEffect(()=>{
    if(!session.auth_token) navigate("/")
  },[session])

  return(
  <main className='vh-100 d-flex flex-column overflow-hidden border'>
    <Header />
    <MonophasicMain loading={loading} registerMonophasic={registerMonophasic}/>
    <InfoToast response={response} />
  </main>
  );
}

export default Monophasic