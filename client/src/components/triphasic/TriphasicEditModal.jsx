import TriphasicEditForm from "./TriphasicEditForm";

const TriphasicEditModal = ({dataToEdit, setDataToEdit, handleEdit, editMotor})=>{
  return(
    <div className="modal fade" id="triphasic" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Editar - Trifásico</h1>
            <button onClick={()=>setDataToEdit(null)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body p-0 m-0">
            {dataToEdit !== null ? <TriphasicEditForm dataToEdit={dataToEdit} handleEdit={handleEdit}/> : ''}
          </div>
          <div className="modal-footer">
            <button onClick={()=>setDataToEdit(null)} type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close"><i className="fas fa-ban me-2"></i>Cancelar</button>
            <button onClick={(e)=>editMotor(e, dataToEdit)} type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close"><i className="fas fa-pencil-alt me-2"></i>Editar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TriphasicEditModal;