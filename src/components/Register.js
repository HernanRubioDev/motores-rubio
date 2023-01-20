import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";

const Register = ()=>{

  const initialForm = {
    username:'',
    email:'',
    password:'',
    rePassword:''
  }

  const validateForm = (form)=>{
    const errors ={}
    const user_regEx = /^[a-z0-9_-]{5,16}/igm;
    const email_regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const pass_regEx = /^(?=.*\d)(?=.*[!@#$%_^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    switch (true) {
      case !form.username.trim():
        errors.username='Este campo es obligatorio.';
        break

      case form.username.length < 5 || form.username.length > 16:
        errors.username = 'El usuario debe contenter entre 5 y 16 carácteres';
        break

      case !user_regEx.test(form.username):
        errors.username="El usuario solo puede conenter letra, numeros, '-' y '_'";
        break

      case !form.email.trim():
        errors.email='Este campo es obligatorio.';
        break

      case !email_regEx.test(form.email):
        errors.email='Formato de email invalido.';
        break

      case !form.password.trim():
        errors.password='Este campo es obligatorio.';
        break
      
      case form.password.length < 8 || form.password.length > 20:
        errors.password = 'La contraseña debe contenter entre 8 y 20 carácteres.';
        break

      case !pass_regEx.test(form.password):
        errors.password = 'La contraseña debe contener al menos un numero, una letra y un caracter especial';
        break

      case form.rePassword.trim() !== form.password.trim():
        errors.rePassword='Las contraseñas no coinciden';
        break
    }
    return errors
  }

  const {form, loading, errors, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm);
  const {isOpen, openModal, closeModal} = useModal();

  return(
    <section className="d-flex container-fluid justify-content-center align-items-center h-100 w-100 bg-body-secondary">
      <Modal isOpen={isOpen} title={'¡Bienvenido!'} paragraph={'Tu cuenta ah sido creada con exito.'}>
        <div className="modal-dialog bg-white w-25 p-3">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold fs-3">¡Bienvenido!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className='fs-5'>Tu cuenta ha sido creada con exito.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary w-25">Ingresar</button>
            </div>
          </div>
        </div>
      </Modal>
      <form onSubmit={(e)=>handleSubmit(e)} name='register' className="border container-fluid p-3 w-sm-100 col-sm-6 col-md-5 col-lg-4 col-xl-4 bg-white rounded-1">
        <legend className="text-center w-100 border-bottom pb-3 fs-3 fw-semibold">Registrarse</legend>
        <div className="mb-3 pt-3">
          <div className="d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
          </svg>
            <input onBlur={(e)=>handleBlur(e)} onChange={(e)=>handleChange(e)} type="text" className="form-control ms-2" id="userRegister" autoFocus placeholder="Usuario" name='username' value={form.username}/>
          </div>
            <p id="userRegister" className="form-text text-danger text-start text-end">{errors.username}</p>
        </div>
        <div className="mb-3">
          <div className="d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>
            <input onBlur={(e)=>handleBlur(e)} onChange={(e)=>handleChange(e)} type="email" className="form-control ms-2" id="emailRegister" placeholder="Email" name='email' value={form.email}/>
          </div>
            <p id="emailRegister" className="form-text text-danger text-end">{errors.email}</p>
        </div>
        <div className="mb-3">
          <div className="d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
            <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
            <input onBlur={(e)=>handleBlur(e)} onChange={(e)=>handleChange(e)} type="password" className="form-control ms-2" id="passwordRegister" placeholder="Contraseña" name='password' value={form.password}/>
          </div>
            <p id="passwordRegister" className="form-text text-danger text-end">{errors.password}</p>
        </div>
        <div className="mb-3">
          <div className="d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
            <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
            <input onBlur={(e)=>handleBlur(e)} onChange={(e)=>handleChange(e)} type="password" className="form-control ms-2" id="RePasswordRegister" placeholder="Repite la contraseña" name='rePassword' value={form.rePassword}/>
          </div>
            <p id="RePasswordRegister" className="form-text text-danger text-end">{errors.rePassword}</p>
        </div>
        <div className="d-flex flex-column justify-content-evenly align-items-center">
          {Object.keys(errors).length === 0 ?
          <button type="submit" className="btn btn-primary w-100" >Registrarse</button>
          :
          <button type="submit" className="btn btn-primary w-100" disabled>Registrarse</button>
        }
        <div className="form-text text-secondary d-flex justify-content-center w-100 fs-6">¿tienes cuenta? <Link className="text-decoration-none text-primary ms-1 fs-6" to='/login'>Ingresa!</Link></div>
        </div>
      </form>
    </section>
  );
}

export default Register;