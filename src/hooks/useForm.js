import { useState } from "react"
import {useApi} from "./useApi";
import { useModal } from "./useModal";

const useForm = (initialForm, validateForm)=>{
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const {registerUser, loginUser, addNewMotor, getMotor} = useApi();
  const {isOpen, closeModal, openModal} = useModal();
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
        registerUser(form, setErrors, setLoading, setResponse, openModal);
        break;

      case 'login':
        loginUser(form, setLoading, setErrors);
        break;

      case 'monophasic':
        addNewMotor(form, setLoading);
      break;

      case 'triphasic':
        addNewMotor(form, setLoading);
      break;

      case 'washer':
        addNewMotor(form, setLoading);
      break;

      default:
        break;
    }
  }

  return {form, loading, errors, response, handleChange, handleBlur,handleSubmit, isOpen, closeModal}
}

export default useForm;