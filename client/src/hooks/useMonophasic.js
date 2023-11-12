import { useNavigate } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import { useContext, useState } from "react";
import sessionContext from "../context/UserContext";

const useMonophasic = ()=>{
  const navigate = useNavigate();
  const api = helpHttp();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([])
  const {session, handleSession} = useContext(sessionContext)


  const registerMonophasic = async(e, monophasic)=>{
    console.log(monophasic)
    const infoToast = new bootstrap.Toast(document.getElementById("infoToast"))
    const {username, auth_token} = session
    e.preventDefault();
    infoToast.show()
    setLoading(true)
    const endpoint = `http://localhost:3000/monophasic/add/:${username}/:${auth_token}`;
    const options = {
      body: monophasic,
      headers:{
        "content-type":"application/json",
      }
    }
    try {
      const res = await api.post(endpoint, options)
      switch (true) {
        
        case res.status === 201:
          setResponse(res)
          infoToast.show()
          break;

        case res.status === 400:
          setErrors(res.validations);
          break;

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


  return {loading, response, registerMonophasic}
}

export default useMonophasic;