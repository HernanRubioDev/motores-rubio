import { useState } from 'react';
import { useApi } from './useApi';

export const useMotor = ()=>{
  const [motors, setMotors] = useState(null);
  const {getMotor, deleteMotor, setLoading, loading} = useApi();

  const getMotors = async(form)=>{
    if(form.motorType !== 'monophasic') delete form.startType
    setLoading(true)
    const motor = await getMotor(form);
    setMotors(motor);
    setLoading(false)
    return motors
  }

  const delMotor = async(id)=>{
    setLoading(true)
    await deleteMotor(id);
    let newMotors = motors.filter(el => el.id !== id);
    setMotors(newMotors)
    setLoading(false);
  }

  const getAllMotors = async (form)=>{
    setLoading(true)
    const motor = await getMotor(form);
    setMotors(motor);
    setLoading(false)
    return motors
  }

  return {getMotors, delMotor, getAllMotors, loading, motors}
}