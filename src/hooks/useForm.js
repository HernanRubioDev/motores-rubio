import { useState } from "react"
import {useApi} from "../hooks/useApi";

const useForm = (initialForm, validateForm)=>{
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  
  const {registerUser, loginUser} = useApi();

  const handleChange = (e)=>{
    setForm(
      {...form, [e.target.name]: e.target.value,}
    )
  }

  const handleBlur = (e)=>{
    handleChange(e)
    setErrors(validateForm(form));
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    switch (e.target.name) {
      case 'register':
        registerUser(form, setErrors);
        break;

      case 'login':
        loginUser(form);
        break;

      case 'monophasic':
      break;

      case 'triphasic':
      break;

      case 'washer':
      break;

      case 'search':
      break;

      default:
        break;
    }
  }

  return {form, loading, errors, handleChange, handleBlur,handleSubmit}
}

export default useForm;