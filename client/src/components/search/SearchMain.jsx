import SearchForm from "./SearchForm";
import useForm from "../../hooks/useForm";
import {useEffect, useState } from "react";
import MotorTable from "./MotorsTable";


const SearchMain = ({form, loading, motors, handleChange, handleReset, setDataToEdit, getMotor})=>{
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

  return(
    <div className="d-flex flex-grow-1 overflow-y-auto">
      <SearchForm width={width} loading={loading} form={form} handleChange={handleChange} handleReset={handleReset} getMotor={getMotor} />
      <MotorTable motors={motors} setDataToEdit={setDataToEdit}/>
    </div>
  )
}

export default SearchMain;