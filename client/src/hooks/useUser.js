import { useNavigate } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import { useContext, useState } from "react";
import sessionContext from "../context/UserContext";

const useUser = ()=>{
  const navigate = useNavigate();
  const api = helpHttp();
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([])
  const {handleSession} = useContext(sessionContext)
  const {session} = useContext(sessionContext)

  const registerUser= async (e, user)=>{
    e.preventDefault();
    const alertModal = new bootstrap.Modal(document.getElementById("alertModal"))
    setLoading(true)
    const endpoint = "http://localhost:3000/user/register";
    const options = {
      body: user,
      headers:{
        "content-type":"application/json",
      }
    }
    try {
      const res = await api.post(endpoint, options)
      switch (true) {

        case res.status === 400:
          setErrors(res.validations);
          break;
      
        case res.status === 201:
          setResponse(res)
          alertModal.show()
          setTimeout(() => {
            alertModal.hide()
            navigate("/")
          }, 2000);
          break;

        case res.status === 500:
          setResponse(res)
          alertModal.show()
          break;

        default:
          setResponse({title:"Error", body:"Parece que ha ocurrido un error. Inténtelo mas tarde.", success:false})
          alertModal.show()
          break;
      }
      
    } catch (error) {
      setResponse({title:"Error", body:"Parece que ha ocurrido un error. Inténtelo mas tarde.", success:false})
      alertModal.show()
    }
    setLoading(false)
  }

  const loginUser = async (e, user)=>{
    const alertModal = new bootstrap.Modal(document.getElementById("alertModal"))
    e.preventDefault();
    setLoading(true)
    const loginEndpoint = "http://localhost:3000/user/login";
    const options = {
      body: user,
      headers: {
        "content-type":"application/json"
      } 
    }

    try {
      const res = await api.post(loginEndpoint, options)
      switch (true) {
        case res.status === 200:
          localStorage.setItem ("auth_token", res.auth_token);
          localStorage.setItem("username", res.username)
          handleSession({auth_token: res.auth_token, username:res.username, name:res.name, surname:res.surname})
          break;
          
        case res.status === 400:
          setErrors(res.validations);
          handleSession(false)
          break
        
        case res.status === 401:
          setErrors(res.validations);
          handleSession(false)
          break
        
        case res.status === 403:
          setErrors(res.validations);
          handleSession(false)
          break

        case res.status === 500:
          setResponse(res)
          alertModal.show()
          handleSession(false)
          break

        default:
          setResponse({status:res.status ,title:"Ups...", body:"Parece que ha ocurrido un error...intentelo mas tarde", success:false})
          alertModal.show()
          handleSession(false)
          break;
      }
    } catch (error) {
      setResponse({status:res.status ,title:"Ups...", body:"Parece que ha ocurrido un error...intentelo mas tarde", success:false})
      alertModal.show()
      handleSession(false)
      }
    setLoading(false)
  }

  const logOutUser = async ()=>{
    const {username, auth_token} = session
    const endpoint = `http://localhost:3000/user/logout/${username}/${auth_token}`
    const res = await api.patch(endpoint)
    localStorage.removeItem("auth_token");
    localStorage.removeItem("username");
    localStorage.removeItem("name");
    localStorage.removeItem("surname");

    handleSession({auth_token:false, username:'', name:'', surname:''})

    navigate("/")
  }

  return {errors, loading, response, registerUser, loginUser, logOutUser}
}

export default useUser;