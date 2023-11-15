import { useNavigate } from "react-router-dom";
import sessionContext from "../context/UserContext";
import { useContext, useEffect } from "react";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import SearchMain from "../components/search/SearchMain";
import useMotor from "../hooks/useMotor";
import InfoToast from "../components/InfoToast";
import MonophasicEditModal from "../components/monophasic/MonophasicEditModal";
import TriphasicEditModal from "../components/triphasic/TriphasicEditModal";
import WasherEditModal from "../components/washer/WasherEditModal";
import AlertModal from "../components/AlertModal";
import ConfirmModal from "../components/ConfirmModal";

const Search = ()=>{
  const initialSearch = {
    motor_type:'monophasic',
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
  const {form, dataToEdit, motorToDelete, handleChange, setDataToEdit,  setMotorToDelete, handleReset, handleEdit} = useForm(initialSearch);
  const {loading, response, motors, getMotor, editMotor, deleteMotor} = useMotor();
  useEffect(()=>{
    if(!session.auth_token) navigate("/")
  },[session])
  return(
    <main className="vh-100 d-flex flex-column overflow-hidden">
      <Header />
      <SearchMain form={form} loading={loading} motors={motors} handleChange={handleChange} handleReset={handleReset} setDataToEdit={setDataToEdit} setMotorToDelete={setMotorToDelete} getMotor={getMotor}/>
      <MonophasicEditModal dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} handleEdit={handleEdit} editMotor={editMotor}/>
      <TriphasicEditModal dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} handleEdit={handleEdit} editMotor={editMotor} />
      <WasherEditModal dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} handleEdit={handleEdit} editMotor={editMotor} />
      <InfoToast response={response}/>
      <AlertModal response={response}/>
      <ConfirmModal motorToDelete={motorToDelete} deleteMotor={deleteMotor}/>
    </main>
  );
}

export default Search;