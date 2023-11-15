const ConfirmModal = ({motorToDelete, deleteMotor})=>{
    return(
    <form className="modal fade" id="ConfirmModal" tabIndex="-1" aria-labelledby="ConfirmModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id="ConfirmModalLabel">Eliminar</h1>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<p>¿Está seguro de que desea eliminar esta motor?</p>
					</div>
					<div className="modal-footer">
						<button onClick={()=>deleteMotor(motorToDelete)} type="button" data-bs-dismiss="modal" className="btn btn-danger  d-flex align-items-center"> 
						<i className="fas fa-trash-alt me-2"></i>Eliminar
						</button>
					</div>
				</div>
			</div>
    </form>
    );
}
export default ConfirmModal;