import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login/LoginForm";
import sessionContext from '../context/UserContext';
import '../stylesheets/Login.css'
import { useContext, useEffect } from "react";
import useUser from "../hooks/useUser";
import AlertModal from "../components/AlertModal";
const Login = ()=>{
  const navigate = useNavigate();
  const {session} = useContext(sessionContext)

  useEffect(()=>{
    if(session.auth_token) navigate("/search")
  },[session])

  const { loading, errors, response, loginUser} = useUser()

  return(
    <main className='vh-100 d-flex flex-column justify-content-center align-items-center bg-light overflow-hidden'>
      <LoginForm loading={loading} errors={errors} loginUser={loginUser}/>
      <AlertModal response={response}/>
    </main>
  );
}

export default Login;