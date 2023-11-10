import { useState } from "react"
import { useNavigate } from "react-router-dom";

const useForm = (initialForm, validateForm)=>{

  const [form, setForm] = useState(initialForm);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [errors, setErrors] = useState({})
  const [motorToDelete, setMotorToDelete] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e)=>{
    setForm({
      ...form, [e.target.name]: e.target.value
    });
  }

  const handleEdit = (e)=>{
    setDataToEdit({
      ...dataToEdit, [e.target.name]: e.target.value
    })
  }

  const handleDelete = (id)=>{
    setMotorToDelete(id)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setErrors(validateForm(form));
  }

  return {form, errors, dataToEdit, motorToDelete, handleChange, setErrors, handleSubmit, handleEdit, handleDelete, setForm, setDataToEdit}
}

export default useForm;