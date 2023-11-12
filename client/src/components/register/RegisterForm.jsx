import {NavLink} from 'react-router-dom';
import '../../stylesheets/Register.css'
import useForm from '../../hooks/useForm';
import Loader from '../Loader';

const RegisterForm = ({loading, errors, registerUser})=>{

  const initialRegister = {
    name:"",
    surname:"",
    username:"",
    password:"",
    re_password:""
  }

  const {form, handleChange} = useForm(initialRegister)

  return(
    <div className="col-12 col-lg-9 d-flex bg-white">
    <div className="d-none d-lg-flex flex-column justify-content-center align-items-center col-6 border bg-success bg-opacity-75">
      <img className="col-4" src='/images/gears.svg'/>
      <div className="text-center mt-3">
        <h3 className="text-white fw-bold fs-2">¡Bienvenido!</h3>
        <p className="text-white fw-semibold">Sistema administrativo para talleres de bobinado</p>
      </div>
    </div>
    <form onSubmit={(e)=>registerUser(e, form)} className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-6 border py-3">
        <h3 className="text-center text-secondary fw-bold fs-2">REGISTRARSE</h3>
        <div className="d-flex flex-column w-100 px-4">
        <div className="mb-3">
            <label htmlFor="usernameValidation" className="text-body-tertiary fw-semibold">Usuario</label>
            <div className="d-flex flex-column align-items-center position-relative">
              <i className="fas fa-user position-absolute text-secondary ms-3 top-50 start-0 translate-middle"/>
              <input onChange={(e)=>handleChange(e)} type="text" className={`${errors && errors.username && 'is-invalid'} login-input form-control`} id="usernameValidation" placeholder='Ingrese su usuario' autoFocus name='username' value={form.username}/>
            <span className={`${errors && errors.username ? 'invalid-feedback' : 'valid-feedback'} valid-feedback position-absolute top-100 m-0`}>
            {errors && errors.username}
            </span>
            </div>
          </div>
        <div className="mb-3">
          <label htmlFor="nameValidation" className="text-body-tertiary fw-semibold">Nombre</label>
          <div className="d-flex flex-column align-items-center position-relative">
            <i className="fas fa-user position-absolute text-secondary ms-3 top-50 start-0 translate-middle"/>
            <input onChange={(e)=>handleChange(e)} type="text" className={`${errors && errors.name && 'is-invalid'} register-input form-control`} id="nameValidation" placeholder='Ingrese su nombre' name='name' value={form.name}/>
          <span className={`${errors && errors.name ? 'invalid-feedback' : 'valid-feedback'} valid-feedback position-absolute top-100 m-0`}>
          {errors && errors.name}
          </span>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="surnameValidation" className="text-body-tertiary fw-semibold">Apellido</label>
          <div className="d-flex flex-column align-items-center position-relative">
            <i className="fas fa-user position-absolute text-secondary ms-3 top-50 start-0 translate-middle"/>
            <input onChange={(e)=>handleChange(e)} type="text" className={`${errors && errors.surname && 'is-invalid'} register-input form-control`} id="surnameValidation" placeholder='Ingrese su apellido' name='surname' value={form.surname}/>
          <span className={`${errors && errors.surname ? 'invalid-feedback' : 'valid-feedback'} valid-feedback position-absolute top-100 m-0`}>
          {errors && errors.surname}
          </span>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="passwordValidation" className="text-body-tertiary fw-semibold">Contraseña</label>
          <div className="d-flex align-items-center position-relative">
            <i className="fas fa-key position-absolute ms-3 top-50 start-0 translate-middle text-secondary"/>
            <input onChange={(e)=>handleChange(e)} type="password" className={`${errors && errors.password && 'is-invalid'} register-input form-control`} id='passwordValidation' placeholder='Ingrese su contraseña' name='password' value={form.password}/>
          <span className={`${errors && errors.password ? 'invalid-feedback' : 'valid-feedback'} position-absolute top-100 m-0`}> 
            {errors && errors.password}
          </span>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="repasswordValidation" className="text-body-tertiary fw-semibold">Contraseña</label>
          <div className="d-flex align-items-center position-relative">
            <i className="fas fa-key position-absolute ms-3 top-50 start-0 translate-middle text-secondary"/>
            <input onChange={(e)=>handleChange(e)} type="password" className={`${errors && errors.re_password && 'is-invalid'} register-input form-control`} id='repasswordValidation' placeholder='Ingrese su contraseña' name='re_password' value={form.re_password}/>
          <span className={`${errors && errors.re_password ? 'invalid-feedback' : 'valid-feedback'} position-absolute top-100 m-0`}> 
            {errors && errors.re_password}
          </span>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center w-100 px-4 mt-3">
        {loading ? 
        <Loader />
        :
        <button type="submit" className="btn btn-primary w-100 fw-semibold">REGISTRARSE</button>
        }
      </div>
      <div className='d-flex w-100 justify-content-end px-4 mt-1'>
        <span className='text-body-tertiary'>¿Ya tienes cuenta?</span>
        <NavLink to='/' className='link-underline link-underline-opacity-0 text-end ms-1'>¡Ingresa!</NavLink>
      </div>
    </form>
  </div>
  )
}

export default RegisterForm;