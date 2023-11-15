
const TableData = ({data, setDataToEdit, setMotorToDelete})=>{
  const {brand, owner, rpm, large, motor_type} = data;
 return(
  <tr className="cursor-pointer" onClick={()=>setDataToEdit(data)} data-bs-toggle="modal" data-bs-target={`#${motor_type}`}>
    <td>{brand}</td>
    <td>{owner}</td>
    <td>{rpm}</td>
    <td>{large}</td>
    <td>
      <button onClick={()=>setDataToEdit(data)} className="border-0 pe-2 bg-transparent" data-bs-toggle="modal" data-bs-target={`#${motor_type}`}><img className="m-o p-0" src="icons/edit.svg" /></button>
      <button onClick={()=>setMotorToDelete(data)} className="border-0 ps-2 bg-transparent" data-bs-toggle="modal" data-bs-target="#ConfirmModal"><img className="m-o p-0" src="icons/delete.svg" /></button>
    </td>
  </tr>
 );
}

export default TableData;