import TableData from "./TableData";

const MotorTable = ({motors, setDataToEdit, handleDelete, setMotorToDelete })=>{
  return(
    <div className="d-flex flex-column w-100 ms-3 mt-2 pe-3 overflow-y-auto "> 
      <table className="table table-responsive table-striped table-hover">
        <thead className="text-center sticky-top z-0">
          <tr>
            <th scope="col">Marca</th>
            <th scope="col">Dueño</th>
            <th scope="col">Rpm</th>
            <th scope="col">Largo</th>
            <th scope="col">Accion</th>
          </tr>
        </thead >
        <tbody className="text-center">

          {
            motors === undefined || motors.length === 0?
            <tr><td colSpan='5'>Sin datos</td></tr>
            :
            motors.map((motor, index) => <TableData key={index} data={motor} setDataToEdit={setDataToEdit} handleDelete={handleDelete} setMotorToDelete={setMotorToDelete}/>)
          }
        
        </tbody>
      </table>
    </div>
  );
}

export default MotorTable;