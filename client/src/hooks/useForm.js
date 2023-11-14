import { useState } from "react"

const useForm = (initialForm)=>{

  const [form, setForm] = useState(initialForm);
  const [dataToEdit, setDataToEdit] = useState(null);

  const handleChange = (e)=>{
    setForm({
      ...form, [e.target.name]: e.target.value
    });
  }

  const handleReset = ()=>{
    setForm(initialForm)
  }

  const handleEdit =(e)=>{
    setDataToEdit({
      ...dataToEdit,
      [e.target.name]: e.target.value
    })
  }
  

  return {form, dataToEdit, handleChange, handleEdit, handleReset, setDataToEdit, setForm}
}

export default useForm;