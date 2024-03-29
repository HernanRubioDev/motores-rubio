import TrihpasicForm from "./TriphasicForm";
import useForm from "../../hooks/useForm";
import {useEffect, useState } from "react";
import TrihpasicPreviewView from "./TriphasicPreviewView";
const TriphasicMain = ({loading, registerMotor})=>{
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

  const initialTrihpasic = {
    motor_type:'triphasic',
    brand:'',
    rpm:'',
    minor_dim:'',
    model:'',
    hp:'',
    major_dim:'',
    owner:'',
    slots:'',
    large:'',
    works_teps:'',
    work_laps:'',
    work_wire:'',
    start_steps:'',
    start_laps:'',
    start_wire:'',
    voltage:'',
    connection:'',
    winding_type:'',
    observations:''
  }

  const {form, handleChange, handleReset} = useForm(initialTrihpasic);
  return(
  <div className="d-flex flex-grow-1 overflow-y-auto">
    <TrihpasicForm width={width} loading={loading} form={form} handleChange={handleChange} handleReset={handleReset} registerMotor={registerMotor}/>
    <TrihpasicPreviewView data={form}/>
  </div>
  );
}

export default TriphasicMain;