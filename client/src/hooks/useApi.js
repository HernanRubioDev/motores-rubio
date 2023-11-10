import { useState } from "react";
import {helpHttp} from "../helpers/helpHttp";
import { json, useNavigate } from "react-router-dom";

const useApi = ()=>{
  let api = helpHttp();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([])

  const registerUser = async (user)=>{
    setLoading(true);
    const registerEndpoint = "http://localhost:3000/register";
    let options = {
      body: user,
      headers:{"content-type" : "application/json"},
    }
    try {
      const res = await api.post(registerEndpoint, options);
      setResponse(res);
    } catch (err) {
      console.error(err)
    }
    setLoading(false);
  }

  const loginUser = async (user)=>{
    setLoading(true);
    const loginEndpoint = "http://localhost:3000/login";
    let options = {
      body: user,
      headers:{"content-type":"application/json"},
    }
    try {
      const res = await api.post(loginEndpoint, options);
      setResponse(res)
      if(res.auth_token){
        localStorage.setItem("auth_token", res.auth_token)
        navigate('/search');
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  const logoutUser = async ()=>{
    const logoutUrl = "http://localhost:3000/logout";
    const auth_token = localStorage.getItem('auth_token')
    let options = {
      body: {auth_token},
      headers:{
        "content-type":"application/json"},
    }
    try {
      const res = await api.post(logoutUrl, options);
      if(res){
        localStorage.removeItem("auth_token");
        navigate('/login');
      }
    } catch (err) {
      console.error(err)
    }
  }

  const registerMonophsic = async (motor)=>{
    motor.auth_token = localStorage.getItem('auth_token')
    const monophasicUrl = `http://localhost:3000/motor/new/monophasic/?auth_token=${motor.auth_token}`;

    let options = {
      body: motor,
      headers:{
        "content-type":"application/json",
      },

    }
    try {
      const res = await api.post(monophasicUrl, options);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  const registerTriphasic = async (motor)=>{
    motor.auth_token = localStorage.getItem('auth_token')
    const triphasicUrl = `http://localhost:3000/motor/new/triphasic/?auth_token=${motor.auth_token}`;
    let options = {
      body: motor,
      headers:{"content-type":"application/json"}
    }
    setLoading(true);
    try {
      const res = await api.post(triphasicUrl, options);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  const registerWasher = async (motor)=>{
    console.log(motor)
    /*const monophasicUrl = "http://localhost:3000/new/washer";
    let options = {
      body: motor,
      headers:{"content-type":"application/json"}
    }
    setLoading(true);
    try {
      const res = await post(monophasicUrl, options);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);*/
  }

  const registerMotor = async(motor)=>{
    setLoading(true)
    motor.auth_token = localStorage.getItem('auth_token')
    const endpoint = `http://localhost:3000/motor/new/${motor.motorType}/?auth_token=${motor.auth_token}`;

    let options = {
      body: motor,
      headers:{"content-type":"application/json"}
    }
    try {
      const res = await api.post(endpoint, options);
      console.log(res)
    } catch (error) {
      console.error(err);
    }
    setLoading(false)
  }

  const getMotors = async (motor)=>{
    const {motorType, brand, rpm, minor_dim, model, hp, major_dim, owner, slots, large} = motor;
    setLoading(true)
    const auth_token = localStorage.getItem('auth_token');
    const motorUrl = `http://localhost:3000/motor/get/${motorType}/?auth_token=${auth_token}&motorType=${motorType}&brand=${brand}&rpm=${rpm}&minor_dim=${minor_dim}&model=${model}&hp=${hp}&major_dim=${major_dim}&owner=${owner}&slots=${slots}&large=${large}`;
    const res = await api.get(motorUrl);
    res.motorType = motorType
    setResponse(res)
    setLoading(false)
  }

  const deleteMotor = async(id_motor)=>{
    setLoading(true)
    let motors = response;
    const motorType = motors.motorType
    delete motors.motorType
    const auth_token = localStorage.getItem('auth_token');
    const deleteUrl = `http://localhost:3000/motor/del/${motorType}/${id_motor}/?auth_token=${auth_token}`;
    const res = await api.remove(deleteUrl);
    if (res){
      motors.motors = motors.motors.filter(motor => motor.id_motor !== id_motor);
      motors.motorType = motorType
      console.log(motors)
      setResponse(motors)
    }
    setLoading(false)
  }

  const editMonophasic = async(motor)=>{
    const auth_token = localStorage.getItem('auth_token');
    console.log(motor)
    const editUrl = `http://localhost:3000/motor/edit/monophasic/?auth_token=${auth_token}`
    const options = {
      body: motor,
      headers:{"content-type":"application/json"}
    }
    try {
      const res = await api.patch(editUrl, options)
      if(res){
        const motors = response;
        motors.motors =motors.motors.map(el => el.id_motor = motor.id_motor ? motor : el);
        console.log(motors)
        setResponse(motors)
      }
    } catch (err) {
      console.error(err)
    }

  }

  return {errors, loading, response, registerUser, loginUser, logoutUser, registerMotor, registerMonophsic, registerTriphasic, registerWasher, getMotors, deleteMotor, editMonophasic}

}

export default useApi;