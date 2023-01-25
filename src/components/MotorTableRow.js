import React from 'react';

const MotorTableRow = ({motor})=>{
  const {brand, owner, majorDim, minorDim, large} = motor;
  return(
    <tr>
      <td>{brand}</td>
      <td>{owner}</td>
      <td>{majorDim}</td>
      <td>{minorDim}</td>
      <td>{large}</td>
    </tr>
  );
}
export default MotorTableRow