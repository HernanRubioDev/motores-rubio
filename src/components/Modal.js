import { useModal } from '../hooks/useModal';
import '../stylesheets/Modal.css';

const Modal = ({isOpen, children})=>{
  return(
    <article className={`modal-cotaniner ${isOpen} position-fixed min-vw-100 min-vh-100 d-flex justify-content-center align-items-center top-0 start-0 bg-secondary bg-opacity-50`}>
      {children}
    </article>
  )
}

export default Modal;