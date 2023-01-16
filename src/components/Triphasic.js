import { useState } from 'react';
import useActive from '../hooks/useActive';

const Triphasic = ()=>{
  const [activeBtn, setActiveBtn] = useState('triphasic-left__link');
  const {changeActive} = useActive();

  const handleActive = (e)=>{
    changeActive(e, activeBtn, setActiveBtn);
  }
  return(
  <section className="d-flex container-fluid justify-content-center align-items-center h-100 w-100 bg-body-secondary">
    <div className="w-75 h-75 border border-secondary border-top-0 bg-white d-flex flex-column box-shadow">
      <nav className="w-100 d-flex flex-nowrap flex-row justify-content-evenly list-group">
      <ul className="nav nav-pills w-100">  
        <li className="nav-item border border-secondary border-start-0 flex-fill">
          <a onClick={(e)=>handleActive(e)} className="nav-link text-center rounded-0 active pressed-btn" href="#triphasic-left" id="triphasic-left__link">Primero</a>
        </li>
        <li className="nav-item border border-secondary border-start-0 border-end-0 flex-fill">
          <a onClick={(e)=>handleActive(e)} className="nav-link text-center rounded-0" href="#triphasic-center" id="triphasic-center__link">Segundo</a>
        </li>
        <li className="nav-item border border-secondary border-end-0 flex-fill">
          <a onClick={(e)=>handleActive(e)} className="nav-link text-center rounded-0" href="#triphasic-right" id="triphasic-right__link">Tercero</a>
        </li>
      </ul>
      </nav>
      <form className="w-100 h-100 d-flex flex-nowrap overflow-hidden" >
        <div id="triphasic-left" className="login-form__div w-100 h-100 d-flex flex-column justify-content-evenly align-items-center align-content-center">
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
        <div id="triphasic-center" className="login-form__div w-100 h-100 d-flex justify-content-evenly align-items-center">
          <div className="w-75 border border-secondary d-flex align-items-center justify-content-evenly h-50">
            <div className=' col-11 d-flex flex-column border border-secondary w-25 p-2'>
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
            <div className=' col-11 d-flex flex-column border border-secondary w-25 p-2'>
              <div className="d-flex align-items-center m-2">
                <input type="text" className="form-control border-secondary"placeholder="Voltaje"/>
              </div>
              <div className="d-flex align-items-center m-2">
                <input type="text" className="form-control border-secondary"placeholder="Conexión"/>
              </div>
              <div className="d-flex align-items-center m-2">
                <input type="text" className="form-control border-secondary"placeholder="Tipo de Bobinado"/>
              </div>
            </div>
          </div>
          </div>
        <div id="triphasic-right" className="login-form__div w-100 h-100 d-flex justify-content-center align-items-center">
          <div className="w-75 d-flex flex-column align-items-center justify-content-evenly h-100">
            <div className="form-floating w-75 h-75">
              <textarea className="form-control border-secondary h-100" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              <label htmlFor="floatingTextarea">Observaciones</label>
            </div>
            <button type="button" className="btn btn-primary w-25">Guardar</button>
          </div>
        </div>
      </form>
      </div>
  </section>
  );
}

export default Triphasic