import { useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
const useApi = ()=>{
  const navigate = useNavigate();

  const registerUser = async (form)=>{
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
    let userData = await getUserData(form);
    console.table(userData.id);
    let endpoint = `http://localhost:5000/users/${userData.id}`;
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
        localStorage.setItem('name', form.username);
        localStorage.setItem('token', auth.token);
        navigate('/')
      }
      else{
        console.log('Error')
      }
    })
  }

  const getUserData = async (form)=>{
    let endpoint = `http://localhost:5000/users?username=${form.username}&password=${form.password}`;

    let userData = await fetch(endpoint)
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

  const checkUserName = (username)=>{}

  const checkEmail = (email)=>{}

  const checkUserAuth = (username)=>{}

  const addNewMotor = (form)=>{}

  return {registerUser, loginUser, checkUserName,checkEmail, checkUserAuth, addNewMotor}
}

export default useApi;