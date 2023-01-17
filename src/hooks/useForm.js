import { useState } from "react"

const useForm = (initialForm, validateForm)=>{
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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

  }

  return {form, loading, errors, handleChange, handleBlur,handleSubmit}
}

export default useForm;