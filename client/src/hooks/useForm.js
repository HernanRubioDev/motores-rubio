import { useState } from "react"

const useForm = (initialForm)=>{

  const [form, setForm] = useState(initialForm);

  const handleChange = (e)=>{
    setForm({
      ...form, [e.target.name]: e.target.value
    });
  }

  const handleReset = ()=>{
    setForm(initialForm)
  }
  

  return {form, handleChange, handleReset, setForm}
}

export default useForm;