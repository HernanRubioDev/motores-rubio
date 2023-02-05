import {useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import {dinamicEndpoint } from '../scripts/dinamicEndpoint';
import helpHttp from '../helpers/helpHttp';
import { useState } from 'react';

export const useApi = ()=>{
  const navigate = useNavigate();
  const {get, post, patch, del} = helpHttp();
  const [loading, setLoading] =useState();
  const [response, setResponse] =useState({});

  const registerUser = async (form, openModal)=>{
    setLoading(true);
    const userError = await checkUsername(form);
    const emailError = await checkEmail(form);
    
    if (Object.keys(userError).length !== 0){
      setResponse(userError);
      setLoading(false);
      return
    }
    
    if (Object.keys(emailError).length !== 0){
      setResponse(emailError);
      setLoading(false);
      return
    }
    
    const endpoint = "http://localhost:5000/users"
    form.id = uuidv4();
    const options={
      body: form
    }

    const res = await post(endpoint, options);
    if(res.length !== 0) setResponse({title:'¡Bienvenido!', register: 'Tu cuenta ah sido creada con éxito'})
    else setResponse({register:'Ups...parece que hubo un error. :(', title:'Error'})
    openModal();
    setLoading(false)
  } 

  const loginUser = async (form)=>{
    setLoading(true)
    const userData = await getUserData(form)
    if(userData === null){
      const error = {login:'El usuario o la conraseña son incorrectos.'}
      setResponse(error);
      setLoading(false)
      return
    }

    const endpoint = `http://localhost:5000/users/${userData.id}`;
    const auth = {token: uuidv4()}
    const options={
      body: auth,
    }

    if(await patch(endpoint, options) !== 0){
      localStorage.setItem('username', form.username);
      localStorage.setItem('token', auth.token);
      localStorage.setItem('email', userData.email)
      setLoading(false)
      navigate('/')
    }
  }

  const logoutUser = async ()=>{
    const id = await getUserId();  /*Json-Server no permite realizar inserciones/modificaciones si no por medio de un id*/
    const endpoint = `http://localhost:5000/users/${id}`;
    const auth = {token: null}

    const options={
      body: auth,
    }

    await patch(endpoint, options);
    localStorage.clear();
    navigate('/login')
  }

  const getUserData = async (form)=>{
    const endpoint = `http://localhost:5000/users?username=${form.username}&password=${form.password}`;
    let res = await get(endpoint);
    if(res.length !== 0) return res[0]
    return null
  }

  const getUserId = async ()=>{ 
    const token = localStorage.getItem('token');
    const endpoint = `http://localhost:5000/users?token=${token}`;
    const res = await get(endpoint);
    if(res.length !== 0) return res[0].id;
    else return null
  }

  const checkUsername = async(form)=>{
    const endpoint = `http://localhost:5000/users?username=${form.username}`
    let error = {};
    const res = await get(endpoint);
    if(res.length !== 0) error.username = 'El usuario ya existe.';
    return error;
  }

  const checkEmail = async (form)=>{
    const endpoint = `http://localhost:5000/users?email=${form.email}`
    const error = {};
    const res = await get(endpoint);
    if (res.length !== 0) error.email = 'Ya existe una cuenta con este Email.';
    return error;
  }

  const checkUserAuth = async ()=>{
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    
    const endpoint = `http://localhost:5000/users?username=${username}&token=${token}`
    const auth = await get(endpoint);
    if (auth.length === 0) return false
    return true
  }

  const addNewMotor = async(form)=>{
    const endpoint = `http://localhost:5000/motors`;
    setLoading(true);
    if(!await checkUserAuth()) return

    form.user_id = await getUserId();
    form.id = uuidv4();
    
    const options = {
      body: form,
    }
    
    setLoading(false)
    return await post(endpoint, options);
  } 

  const getMotor = async (form)=>{
    const id = await getUserId();
    let endpoint = `http://localhost:5000/motors?user_id=${id}`;
    endpoint = dinamicEndpoint(form, endpoint);
    return await get(endpoint);
  }

  const deleteMotor = async(id)=>{
    const endpoint= `http://localhost:5000/motors/${id}`
    await del(endpoint);
  }

  return {registerUser, loginUser, logoutUser ,checkUsername, checkEmail, checkUserAuth, addNewMotor, getMotor, deleteMotor, loading, setLoading, response, setResponse}
 } 
