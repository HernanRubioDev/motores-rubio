import MonophasicForm from "./MonophasicForm";
import useForm from "../../hooks/useForm";
import {useEffect, useState } from "react";
import MonophasicPreviewView from "./MonophasicPreviewView";
const MonophasicMain = ({loading, registerMonophasic})=>{
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

  const initialMonophasic = {
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
    start_type:'',
    winding_type:'',
    observations:''
  }

  const {form, handleChange, handleReset} = useForm(initialMonophasic);

  return(
    <div className="d-flex flex-grow-1 overflow-y-auto">
      <MonophasicForm width={width} loading={loading} form={form} handleChange={handleChange} handleReset={handleReset} registerMonophasic={registerMonophasic} />
      <MonophasicPreviewView data={form}/>
    </div>
  )
}

export default MonophasicMain;