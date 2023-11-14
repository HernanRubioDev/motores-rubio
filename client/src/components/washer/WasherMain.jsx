import WasherForm from "./WasherForm";
import useForm from "../../hooks/useForm";
import {useEffect, useState } from "react";
import WasherPreviewView from "../washer/WasherPreviewView";
const WasherMain = ({loading, registerWasher})=>{
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

  const initialWasher = {
    brand:'',
    rpm:'',
    minor_dim:'',
    model:'',
    hp:'',
    major_dim:'',
    owner:'',
    slots:'',
    large:'',
    spin_work_steps:'',
    spin_work_laps:'',
    spin_work_wire:'',
    spin_start_steps:'',
    spin_start_laps:'',
    spin_start_wire:'',
    first_wash_work_steps:'',
    first_wash_work_laps:'',
    first_wash_work_wire:'',
    second_wash_work_steps:'',
    second_wash_work_laps:'',
    second_wash_work_wire:'',
    wash_start_steps:'',
    wash_start_laps:'',
    wash_start_wire:'',
    voltage:'',
    connection:'',
    winding_type:'',
    capacity:'',
    observations:''
  }

  const {form, handleChange, handleReset} = useForm(initialWasher);
  return(
  <div className="d-flex flex-grow-1 overflow-y-auto">
    <WasherForm width={width} loading={loading} form={form} handleChange={handleChange} handleReset={handleReset} registerWasher={registerWasher}/>
    <WasherPreviewView data={form}/>
  </div>
  );
}

export default WasherMain;