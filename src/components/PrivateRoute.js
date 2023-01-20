import { Navigate } from "react-router-dom";
import { useApi } from "../hooks/useApi";

const PrivateRoute = ({children})=>{
  const {checkUserAuth} = useApi();

  const checkAuth = async()=>{
    let auth = await checkUserAuth();
    console.log(auth)
    return auth
  }
  if(checkAuth() === true) return children
  else return <Navigate  to='/login'/>
}

export default PrivateRoute