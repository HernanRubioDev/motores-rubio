import { useState } from 'react';
import { useApi } from './useApi';

export const useMotor = ()=>{
  const [motors, setMotors] = useState(null);
  const {getMotor, deleteMotor, setLoading, loading} = useApi();

  const getMotors = async(form)=>{
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

  return {getMotors, delMotor, loading, motors}
}