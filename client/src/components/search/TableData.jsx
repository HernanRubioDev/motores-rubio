
const TableData = ({data, motorType, setDataToEdit, handleDelete})=>{
  const {brand, owner, rpm, large, id_motor} = data;
 return(
  <tr>
    <td>{brand}</td>
    <td>{owner}</td>
    <td>{rpm}</td>
    <td>{large}</td>
    <td className="">
      <button onClick={()=>setDataToEdit(data)} className="border-0 pe-2 bg-transparent" data-bs-toggle="modal" data-bs-target={`#${motorType}`}><img className="m-o p-0" src="icons/edit.svg" /></button>
      <button onClick={()=>handleDelete(id_motor)} className="border-0 ps-2 bg-transparent" data-bs-toggle="modal" data-bs-target="#confimDelete"><img className="m-o p-0" src="icons/delete.svg" /></button>
    </td>
  </tr>
 );
}

export default TableData;