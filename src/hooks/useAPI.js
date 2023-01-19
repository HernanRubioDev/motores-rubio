import { useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

export const useApi = ()=>{
  const navigate = useNavigate();
  const registerUser = async (form, setErrors)=>{

    const userError = await checkUsername(form);
    const emailError = await checkEmail(form);

    if (Object.keys(userError).length !== 0){
      setErrors(userError);
      return
    }
    
    if (Object.keys(emailError).length !== 0){
      setErrors(emailError);
      return
    }
    
    const endpoint = "http://localhost:5000/users"
    form.id = uuidv4();
    const options={
      method:'POST',
      body: JSON.stringify(form),
      headers:{
        "Content-type" : "application/json",
      }
    }
    await fetch(endpoint,options)
    .then((res)=>{
      if(res.ok){}
      else{
        console.log('Error')
      }
    })
  } 

  const loginUser = async (form)=>{
    const userData = await getUserData(form);
    const endpoint = `http://localhost:5000/users/${userData.id}`;
    const auth = {token: Date.now()}
    const options={
      method:'PATCH',
      body: JSON.stringify(auth),
      headers:{
        "Content-type" : "application/json",
      }
    }

    await fetch(endpoint, options)
    .then((res)=>{
      if(res.ok){
        localStorage.setItem('username', form.username);
        localStorage.setItem('token', auth.token);
        localStorage.setItem('email', userData.email)
        navigate('/')
      }
      else{
        console.log('Error')
      }
    });
  }

  const logoutUser = async ()=>{
    const id = await getUserId();  /*Json-Server no permite realizar inserciones/modificaciones si no por medio de un id*/
    const endpoint = `http://localhost:5000/users/${id}`;
    const auth = {token: null}

    const options={
      method:'PATCH',
      body: JSON.stringify(auth),
      headers:{
        "Content-type" : "application/json",
      }
    }

    await fetch(endpoint, options)
    .then((res)=>{
      if(!res.ok) {
        console.log('Error en el LogOut');
      }

      localStorage.removeItem('username')
      localStorage.removeItem('email')
      localStorage.removeItem('token')
      navigate('/login')
    })
  }

  const getUserData = async (form)=>{
    const endpoint = `http://localhost:5000/users?username=${form.username}&password=${form.password}`;
    const userData = await fetch(endpoint)
    .then((res)=>{
      if(res.ok){
        return res.json();
      }
      else{
        console.log('Error en getUserData');
      }
    })

    return userData[0];
  }

  const getUserId = async ()=>{ 
    const token = localStorage.getItem('token');
    const endpoint = `http://localhost:5000/users?token=${token}`;

    const userData = await fetch (endpoint)
    .then((res)=>{
      if(res.ok){
        return res.json();
      }
      else{
        console.log('Error en getUserId');
      }
    })

    return userData[0].id;
  }

  const checkUsername = async(form)=>{
    const endpoint = `http://localhost:5000/users?username=${form.username}`
    let error = {};
    await fetch(endpoint)
    .then((res)=>{
      if(res.ok){
        return res.json();
      }
      else{
        return false
      }
    })
    .then((data)=> {
      if(Object.keys(data).length !== 0) error.username = 'El usuario ya existe.'
    });

    return error;
  }

  const checkEmail = async (form)=>{
    const endpoint = `http://localhost:5000/users?email=${form.email}`
    let error = {};
    await fetch(endpoint)
    .then((res)=>{
      if(res.ok){
        return res.json();
      }
      else{
        return false
      }
    })
    .then((data)=> {
      if(Object.keys(data).length !== 0) error.email = 'Ya existe una cuenta con este Email.'
    });

    return error;
  }

  const checkUserAuth = async ()=>{
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    let auth = null;
    
    console.log(localStorage.getItem('token'));
    const endpoint = `http://localhost:5000/users?username=${username}&token=${token}`

    await fetch(endpoint)
    .then((res)=>{
      if(res.ok){
        return res.json();
      }
      else{
        console.log('Error en checkUserAuth.')
      }
    })
    .then((data)=>{
      if(data[0].token == token) auth = true
      else auth = false
    });

    return auth
  }

  const addNewMotor = (form)=>{}

  return {registerUser, loginUser, logoutUser ,checkUsername, checkEmail, checkUserAuth, addNewMotor}
 } 
