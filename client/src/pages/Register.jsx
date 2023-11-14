import { useNavigate } from "react-router-dom";
import AlertModal from "../components/AlertModal";
import RegisterForm from "../components/register/RegisterForm";
import useUser from "../hooks/useUser";
import { useContext, useEffect } from "react";
import sessionContext from "../context/UserContext";


const Register = ()=>{  
  const navigate = useNavigate();
  const {session} = useContext(sessionContext)
  const {loading, errors, response, registerUser} = useUser();

  useEffect(()=>{
    if(session.auth_token) navigate("/search")
  },[session])

  return(
    <main className="vh-100 d-flex flex-column justify-content-center align-items-center bg-light overflow-y-auto">
      <RegisterForm loading={loading} errors={errors} registerUser={registerUser}/>
      <AlertModal response={response}/>
    </main>
  );
}

export default Register