import { useState } from "react"

const useForm = (initialForm)=>{
  const [form, setForm] = useState(initialForm);

  const handleChange = (e)=>{
    setForm(
      {...form, [e.target.name]: e.target.value,}
    )
  }

  return {handleChange, form}
}

export default useForm;