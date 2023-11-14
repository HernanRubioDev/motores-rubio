import WasherEditForm from "./WasherEditForm";

const WasherEditModal = ({data, handleEdit, setDataToEdit})=>{

  return(
    <div className="modal fade" id="washer" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Vista Previa - Lavarropas</h1>
            <button onClick={()=>setDataToEdit(null)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {data ? <WasherEditForm data={data} handleEdit={handleEdit}/> : ''}
          </div>
          <div className="modal-footer">
            <button onClick={()=>setDataToEdit(null)} type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
            <button onClick={()=>handleEdit(data)} type="button" className="btn btn-warning">Editar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WasherEditModal;