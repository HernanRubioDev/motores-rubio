import MonophasicForm from "./MonophasicForm";
import useForm from "../../hooks/useForm";
import {useEffect, useState } from "react";
import MonophasicPreviewView from "./MonophasicPreviewView";
const MonophasicMain = ({loading, registerMotor})=>{
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

  const initialMonophasic = {
    motor_type:'monophasic',
    brand:'',
    rpm:'',
    minor_dim:'',
    model:'',
    hp:'',
    major_dim:'',
    owner:'',
    slots:'',
    large:'',
    uf:'',
    works_teps:'',
    work_laps:'',
    work_wire:'',
    start_steps:'',
    start_laps:'',
    start_wire:'',
    voltage:'',
    connection:'',
    motor_start:'plaqueta',
    winding_type:'',
    observations:''
  }

  const {form, setForm, handleChange, handleReset} = useForm(initialMonophasic);

  return(
    <div className="d-flex flex-grow-1 overflow-y-auto">
      <MonophasicForm width={width} loading={loading} form={form} setForm={setForm} handleChange={handleChange} handleReset={handleReset} registerMotor={registerMotor} />
      <MonophasicPreviewView data={form}/>
    </div>
  )
}

export default MonophasicMain;