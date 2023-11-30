import { helpHttp } from "../helpers/helpHttp";
import { useContext, useState } from "react";
import sessionContext from "../context/UserContext";
import useUser from "./useUser";

const useMotor = ()=>{
  const {logOutUser} = useUser()
  const api = helpHttp();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([])
  const {session} = useContext(sessionContext)
  const [motorToDelete, setMotorToDelete] = useState(null);
  const [motors, setMotors] = useState([])

  const registerMotor = async (e, motor)=>{
    e.preventDefault();
    const {motor_type} = motor
    const infoToast = new bootstrap.Toast(document.getElementById("infoToast"))
    const {username, auth_token} = session

    setLoading(true)
    const endpoint = `https://motores-rubio.onrender.com/${motor_type}/new/${username}/${auth_token}`;
    const options = {
      body: motor,
      headers:{
        "content-type":"application/json",
      }
    }
    try {
      const res = await api.post(endpoint, options);
      switch (true) {
        
        case res.status === 201:
          setResponse(res)
          infoToast.show()
          break;

        case res.status === 400:
          setErrors(res.validations);
          break;

        case res.status === 401:
          setResponse(res);
          alertModal.show();
          setTimeout(()=>{
            logOutUser()
          },2000)
          break

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

  const getMotor = async (e, motor)=>{
    const infoToast = new bootstrap.Toast(document.getElementById("infoToast"))
    const alertModal = new bootstrap.Modal(document.getElementById("alertModal"))
    const {motor_type, brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large} = motor
    e.preventDefault();
    const {username, auth_token} = session
    setLoading(true)
    const endpoint = `https://motores-rubio.onrender.com/${motor_type}/get/${username}/${auth_token}/?motorType=${motor_type}&brand=${brand}&rpm=${rpm}&minor_dim=${minor_dim}&model=${model}&hp=${hp}&major_dim=${major_dim}&owner=${owner}&slots=${slots}&large=${large}`;
    try {
      const res = await api.get(endpoint);
      switch (true) {
        case res.status === 200:
          setMotors(res.motors)
          break;

        case res.status === 401:
          setResponse(res);
          alertModal.show();
          setTimeout(()=>{
            logOutUser()
          },2000)
          break

        case res.status === 404:
          setMotors([])
          setResponse(res);
          infoToast.show();
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
    const alertModal = new bootstrap.Modal(document.getElementById("alertModal"))
    e.preventDefault();
    const {motor_type} = motor
    const {username, auth_token} = session
    const endpoint = `https://motores-rubio.onrender.com/${motor_type}/edit/${username}/${auth_token}`
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
          handleEdited(motor)
          infoToast.show()
          break;

        case res.status === 400:
          setResponse(res);
          infoToast.show()
          break;

        case res.status === 401:
          setResponse(res);
          alertModal.show();
          setTimeout(()=>{
            logOutUser()
          },2000)
          break

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

  const deleteMotor = async(motor)=>{
    const {motor_type} = motor
    const id_motor = Object.values(motor)[1]
    const infoToast = new bootstrap.Toast(document.getElementById("infoToast"))
    const alertModal = new bootstrap.Modal(document.getElementById("alertModal"))
    const {username, auth_token} = session
    const endpoint = `https://motores-rubio.onrender.com/${motor_type}/delete/${username}/${auth_token}/${id_motor}`

    try {
      const res = await api.remove(endpoint);
      switch (true) {
        case res.status === 200:
          setResponse(res)
          filterDeleted(motor)
          infoToast.show()
          break;

        case res.status === 400:
          setErrors(res.validations);
          break;

        case res.status === 401:
          setResponse(res);
          alertModal.show();
          setTimeout(()=>{
            logOutUser()
          },2000)
          break

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

  const handleEdited = (motor)=>{
     const id_motor = Object.values(motor)[1]
    const newMotors = motors.map(el => Object.values(el)[1] === id_motor ? motor : el);
    setMotors(newMotors)
  }

  const filterDeleted = (motor) =>{
    const newMotors = motors.filter(el => el !== motor)
    setMotors(newMotors);
  }

  return {loading, response, motors, motorToDelete, setMotorToDelete, registerMotor, getMotor, editMotor, deleteMotor}
}

export default useMotor;