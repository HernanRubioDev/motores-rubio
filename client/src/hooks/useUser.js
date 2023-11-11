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

  const registerUser = async()=>{}

  const loginUser = async (e, user)=>{
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
        
        case res.status === 403:
          setErrors(res);
          handleSession(false)
          break
        
        case res.status === 404:
          setErrors(res);
          handleSession(false)
          break

        case res.status === 500:
          setResponse(res)
          handleSession(false)
          break

        default:
          setResponse({status:res.status ,title:"Ups...", body:"Parece que ha ocurrido un error...intentelo mas tarde", success:false})
          handleSession(false)
          break;
      }
    } catch (error) {
      setResponse({status:res.status ,title:"Ups...", body:"Parece que ha ocurrido un error...intentelo mas tarde", success:false})
      handleSession(false)
      }
    setLoading(false)
  }

  const logOutUser = async ()=>{
    localStorage.removeItem("auth_token");
    localStorage.removeItem("username");
    handleSession({auth_token:'', username:'', name:'', surname:''})
  }

  return {errors, loading, response, registerUser, loginUser, logOutUser}
}

export default useUser;