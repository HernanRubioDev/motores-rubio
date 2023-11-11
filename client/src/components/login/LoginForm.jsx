import {NavLink} from 'react-router-dom';
import '../../stylesheets/Login.css'
import useForm from '../../hooks/useForm';
import Loader from '../Loader';

const LoginForm = ({loading, errors, loginUser})=>{

  const initialLogin = {
    username:"",
    password:""
  }

  const {form, handleChange} = useForm(initialLogin)

  return(
    <div className="col-12 col-lg-9 h-75 d-flex bg-white">
      <div className="d-none d-lg-flex flex-column justify-content-center align-items-center col-6 border bg-success bg-opacity-75">
        <img className="col-4" src='/images/gears.svg'/>
        <div className="text-center mt-3">
          <h3 className="text-white fw-bold fs-2">¡Bienvenido!</h3>
          <p className="text-white fw-semibold">Sistema administrativo para talleres de bobinado</p>
        </div>
      </div>
      <form onSubmit={(e)=>loginUser(e, form)} className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-6 border">
          <h3 className="text-center text-secondary fw-bold fs-2 py-2">INGRESAR</h3>
          <div className="d-flex flex-column w-100 px-4">
          <div className="mb-4">
            <label htmlFor="usernameValidation" className="text-body-tertiary fw-semibold">Usuario</label>
            <div className="d-flex flex-column align-items-center position-relative">
              <i className="fas fa-user position-absolute text-secondary ms-3 top-50 start-0 translate-middle"/>
              <input onChange={(e)=>handleChange(e)} type="text" className={`${errors && errors.username && 'is-invalid'} login-input form-control`} id="usernameValidation" placeholder='Ingrese su usuario' required autoFocus name='username' value={form.username}/>
            <span className={`${errors && errors.username ? 'invalid-feedback' : 'valid-feedback'} valid-feedback position-absolute top-100 m-0`}>
            {errors && errors.username}
            </span>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordValidation" className="text-body-tertiary fw-semibold">Contraseña</label>
            <div className="d-flex align-items-center position-relative">
              <i className="fas fa-key position-absolute ms-3 top-50 start-0 translate-middle text-secondary"/>
              <input onChange={(e)=>handleChange(e)} type="password" className={`${errors && errors.username && 'is-invalid'} login-input form-control`} placeholder='Ingrese su contraseña' required name='password' value={form.password}/>
            <span className={`${errors && errors.password ? 'invalid-feedback' : 'valid-feedback'} position-absolute top-100 m-0`}> 
              {errors && errors.password}
            </span>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center w-100 px-4 mt-3">
          {loading ? 
          <Loader />
          :
          <button type="submit" className="btn btn-primary w-100 fw-semibold">INGRESAR</button>
          }
        </div>
        <div className='d-flex w-100 justify-content-end px-4 mt-1'>
          <span className='text-body-tertiary'>¿Aún no tienes cuenta?</span>
          <NavLink to='/register' className='link-underline link-underline-opacity-0 text-end ms-1'>¡Registrate!</NavLink>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;