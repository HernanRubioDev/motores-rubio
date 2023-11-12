import AlertModal from "../components/AlertModal";
import RegisterForm from "../components/register/RegisterForm";
import useUser from "../hooks/useUser";


const Register = ()=>{  
  const {loading, errors, response, registerUser} = useUser();
  return(
    <main className="vh-100 d-flex flex-column justify-content-center align-items-center bg-light overflow-y-auto">
      <RegisterForm loading={loading} errors={errors} registerUser={registerUser}/>
      <AlertModal response={response}/>
    </main>
  );
}

export default Register