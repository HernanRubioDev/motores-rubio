import { useNavigate } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import { useContext, useState } from "react";
import sessionContext from "../context/UserContext";

const useMotor = ()=>{
  const navigate = useNavigate();
  const api = helpHttp();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([])
  const {session, handleSession} = useContext(sessionContext)
  const [dataToEdit, setDataToEdit] = useState(null);
  const [motorToDelete, setMotorToDelete] = useState(null);
  const [motors, setMotors] = useState([])

  const getMotor = (e, motor)=>{
    e.preventDefault();
    console.log(motor);
  }
  return {getMotor}
}

export default useMotor;