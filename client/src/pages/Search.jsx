import { useNavigate } from "react-router-dom";
import sessionContext from "../context/UserContext";
import { useContext, useEffect } from "react";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import SearchMain from "../components/search/SearchMain";
import useMotor from "../hooks/useMotor";
import InfoToast from "../components/InfoToast";

const Search = ()=>{
  const initialSearch = {
    motor_type:'',
    brand:'',
    rpm:'',
    minor_dim:'',
    model:'',
    hp:'',
    major_dim:'',
    owner:'',
    slots:'',
    large:'',
  }

  const navigate = useNavigate();
  const {session} = useContext(sessionContext)
  const {form, handleChange, handleReset} = useForm(initialSearch);
  const {loading, response, motors, dataToEdit, setDataToEdit, motorToDelete, setMotorToDelete, getMotor} = useMotor();
  useEffect(()=>{
    if(!session.auth_token) navigate("/")
  },[session])
  return(
    <main className="vh-100 d-flex flex-column overflow-hidden">
      <Header />
      <SearchMain form={form} loading={loading} motors={motors} handleChange={handleChange} handleReset={handleReset} getMotor={getMotor}/>
      <InfoToast response={response}/>
    </main>
  );
}

export default Search;