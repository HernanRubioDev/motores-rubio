import { useState } from 'react';
import useActive from '../hooks/useActive';

const Washer = ()=>{
  const [activeBtn, setActiveBtn] = useState('washer-left__link');
  const {changeActive} = useActive();

  const handleActive = (e)=>{
    changeActive(e, activeBtn, setActiveBtn);
  }
return(
<section className="d-flex container-fluid justify-content-center align-items-center h-100 w-100 bg-body-secondary ">
    <div className="w-75 h-75 border border-secondary border-top-0 bg-white d-flex flex-column box-shadow">
      <nav className="w-100 d-flex flex-nowrap flex-row justify-content-evenly list-group">
      <ul className="nav nav-pills w-100">  
        <li className="nav-item border border-secondary border-start-0 flex-fill">
          <a onClick={(e)=>handleActive(e)} className="nav-link text-center rounded-0 active pressed-btn" href="#washer-left" id="washer-left__link">Primero</a>
        </li>
        <li className="nav-item border border-secondary border-start-0 border-end-0 flex-fill">
          <a onClick={(e)=>handleActive(e)} className="nav-link text-center rounded-0" href="#washer-center" id="washer-center__link">Segundo</a>
        </li>
        <li className="nav-item border border-secondary border-end-0 flex-fill">
          <a onClick={(e)=>handleActive(e)} className="nav-link text-center rounded-0" href="#washer-right" id="washer-right__link">Tercero</a>
        </li>
      </ul>
      </nav>
      <form className="w-100 h-100 d-flex flex-nowrap overflow-hidden" >
        <div id="washer-left" className="login-form__div w-100 h-100 d-flex flex-column justify-content-evenly align-items-center align-content-center">
          <div className='col-11 d-flex flex-wrap h-50 border border-secondary justify-content-evenly '>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control border-secondary"placeholder="Marca"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control border-secondary"placeholder="Rpm"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control border-secondary"placeholder="Dim. Mayor"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control border-secondary"placeholder="Modelo"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control border-secondary"placeholder="Hp"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control border-secondary"placeholder="Dim. Menor"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control border-secondary"placeholder="Dueño"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control border-secondary"placeholder="Ranura"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control border-secondary"placeholder="Largo"/>
              </div>
          </div>
        </div>
        <div id="washer-center" className="login-form__div w-100 h-100 d-flex justify-content-evenly align-items-center">
          <div className="w-75 border border-secondary d-flex align-items-center justify-content-evenly h-75 position-relative">
            <h6 className="position-absolute top-0 start-50 translate-middle bg-white">Centrifugado</h6>
            <div className=' col-11 d-flex flex-column border border-secondary w-25 position-relative p-2'>
            <p className="mono-lable fw-semibold position-absolute start-50 bg-white translate-middle">Trabajo</p>
            <div className="d-flex align-items-center m-2">
              <input type="text" className="form-control border-secondary"placeholder="Paso"/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input type="text" className="form-control border-secondary"placeholder="Vuelta"/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input type="text" className="form-control border-secondary"placeholder="Alambre"/>
            </div>
          </div>
          <div className=' col-11 d-flex flex-column border border-secondary w-25 position-relative p-2'>
            <p className="mono-lable fw-semibold position-absolute start-50 bg-white translate-middle">Arranque</p>
            <div className="d-flex align-items-center m-2">
              <input type="text" className="form-control border-secondary"placeholder="Paso"/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input type="text" className="form-control border-secondary"placeholder="Vuelta"/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input type="text" className="form-control border-secondary"placeholder="Alambre"/>
            </div>
          </div>
          <div className='d-flex  flex-wrap w-25 border border-secondary p-2'>
            <div className="d-flex align-items-center m-2">
              <input type="text" className="form-control border-secondary"placeholder="Voltaje"/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input type="text" className="form-control border-secondary"placeholder="Conexion"/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input type="text" className="form-control border-secondary"placeholder="Tipo de Bobinado"/>
            </div>
            <div className="d-flex flex-wrap align-items-center m-2">
              <input type="text" className="form-control border-secondary"placeholder="Capacidad"/>
            </div>
          </div>
          </div>
          </div>
        <div id="washer-right" className="login-form__div w-100 h-100 d-flex justify-content-center align-items-center">
          <div className="w-75 d-flex flex-column align-items-center justify-content-evenly h-100">
            <div className="form-floating w-75 h-75">
              <textarea className="form-control border-secondary h-100" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              <label for="floatingTextarea">Observaciones</label>
            </div>
            <button type="button" className="btn btn-primary w-25">Guardar</button>
          </div>
        </div>
      </form>
      </div>
</section>
);
}

export default Washer;