import TriphasicEditForm from "./TriphasicEditForm";

const TriphasicEditModal = ({data, handleEdit, setDataToEdit})=>{

  return(
    <div className="modal fade" id="triphasic" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Editar trifásico</h1>
            <button onClick={()=>setDataToEdit(null)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body p-0 m-0">
            {data !== null ? <TriphasicEditForm data={data} handleEdit={handleEdit}/> : ''}
          </div>
          <div className="modal-footer">
            <button onClick={()=>setDataToEdit(null)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-warning">Editar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TriphasicEditModal;