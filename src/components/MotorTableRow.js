import React from 'react';

const MotorTableRow = ({motor, delMotor})=>{
  const {brand, owner, majorDim, minorDim, large, id} = motor;
  return(
    <tr className='cursor-pointer'>
      <td>{brand}</td>
      <td>{owner}</td>
      <td>{majorDim}</td>
      <td>{minorDim}</td>
      <td>{large}</td>
      <td><button onClick={()=>delMotor(id)} type="button" className="btn btn-danger">X</button></td>
    </tr>
  );
}
export default MotorTableRow