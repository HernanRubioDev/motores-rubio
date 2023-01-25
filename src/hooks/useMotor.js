import React, { useState } from 'react';
import { useApi } from './useApi';

export const useMotor = ()=>{
  const [motors, setMotors] = useState(null);
  const {getMotor} = useApi();

  const getMotors = async(form)=>{
    let motor = await getMotor(form);
    setMotors(motor);
    return motors
  }

  return {motors, getMotors}
}