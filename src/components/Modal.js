import '../stylesheets/Modal.css';

const Modal = ({title, paragraph, isOpen})=>{

  return(
    <article className={`modal-cotaniner ${isOpen ? 'd-block' : 'd-none'} position-fixed min-vw-100 min-vh-100 d-flex justify-content-center align-items-center top-0 start-0 bg-secondary bg-opacity-50`}>
      <div className="modal-dialog bg-white w-25 p-3">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-bold fs-3">{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p className='fs-5'>{paragraph}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary w-25">Ingresar</button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Modal;