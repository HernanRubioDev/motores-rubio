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
  const [motorToDelete, setMotorToDelete] = useState(null);
  const [motors, setMotors] = useState([])

  const getMotor = async (e, motor)=>{
    const infoToast = new bootstrap.Toast(document.getElementById("infoToast"))
    const {motor_type, brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large} = motor
    e.preventDefault();
    const {username, auth_token} = session
    setLoading(true)
    const endpoint = `http://localhost:3000/${motor_type}/get/${username}/${auth_token}/?motorType=${motor_type}&brand=${brand}&rpm=${rpm}&minor_dim=${minor_dim}&model=${model}&hp=${hp}&major_dim=${major_dim}&owner=${owner}&slots=${slots}&large=${large}`;
    try {
      const res = await api.get(endpoint);
      switch (true) {
        case res.status === 200:
          setMotors(res.motors)
          break;

        case res.status === 404:
          setMotors([])
          setResponse(res);
          infoToast.show()
          break;

        case res.status === 500:
          setMotors([])
          setResponse(res)
          infoToast.show()
          break;
      
        default:
          setMotors([])
          setResponse({title:"Error", body:"Parece que ha ocurrido un error. Inténtelo mas tarde.", success:false})
          infoToast.show()
          break;
      }
    } catch (error) {
      setMotors([])
      setResponse({title:"Error", body:"Parece que ha ocurrido un error. Inténtelo mas tarde.", success:false})
      infoToast.show()
    }
    setLoading(false)
  }

  const editMotor = async (e, motor)=>{
    const infoToast = new bootstrap.Toast(document.getElementById("infoToast"))
    e.preventDefault();
    const {motor_type} = motor
    const {username, auth_token} = session
    const endpoint = `http://localhost:3000/${motor_type}/edit/${username}/${auth_token}`
    const options = {
      body: motor,
      headers:{
        "content-type":"application/json",
      }
    }
    try {
      const res = await api.patch(endpoint, options);
      switch (true) {
        case res.status === 200:
          setResponse(res)
          infoToast.show()
          break;

        case res.status === 400:
          setErrors(res.validations);
          break;
 // agregar validacion 401 de autenticacion
        case res.status === 500:
          setResponse(res)
          infoToast.show()
          break;

        default:
          setResponse({title:"Error", body:"Parece que ha ocurrido un error. Inténtelo mas tarde.", success:false})
          infoToast.show()
          break;
      }
      
    } catch (error) {
      setResponse({title:"Error", body:"Parece que ha ocurrido un error. Inténtelo mas tarde.", success:false})
      infoToast.show()
    }
    setLoading(false)
  }

 
  return {loading, response, motors, motorToDelete, setMotorToDelete, getMotor, editMotor}
}

export default useMotor;