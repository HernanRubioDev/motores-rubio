import { useState } from 'react';
import useActive from '../hooks/useActive';
import useForm from '../hooks/useForm';

import '../stylesheets/Monophasic.css';

const Monophasic = ()=>{  
  const initialForm = {
    brand:'',
    rpm:'',
    minorDim:'',
    model:'',
    hp:'',
    majorDim:'',
    owner:'',
    slots:'',
    large:'',
    startType:'',
    uf:'',
    workSteps:'',
    workLaps:'',
    workWire:'',
    startSteps:'',
    startLaps:'',
    startWire:'',
    voltage:'',
    connection:'',
    windingType:'',
    observations:'',
  }
  const [activeBtn, setActiveBtn] = useState('mono-left__link');

  const {changeActive} = useActive();
  const {handleChange, form} = useForm(initialForm);

  const handleActive = (e)=>{
    changeActive(e, activeBtn, setActiveBtn);
  }

  return(
    <section className="d-flex container-fluid flex-column justify-content-evenly align-items-center h-100 w-100 bg-body-secondary overflow-hidden">
      <h3 className='fs-2 fw-bold text-secondary'>Nuevo Monofásico</h3>
      <div className=" col-sm-12 col-lg-9 h-75 border border-secondary border-top-0 bg-white d-flex flex-column box-shadow">
      <nav className="w-100 d-flex flex-nowrap flex-row justify-content-evenly list-group">
      <ul className="nav nav-pills w-100">  
        <li className="nav-item border border-secondary border-start-0 flex-fill" aria-current="true">
          <a onClick={(e)=>handleActive(e)} className="nav-link text-center rounded-0 active pressed-btn" href="#mono-left" id='mono-left__link'>Primero</a>
        </li>
        <li className="nav-item border border-secondary border-start-0 border-end-0 flex-fill">
          <a onClick={(e)=>handleActive(e)} className="nav-link text-center rounded-0" href="#mono-center" id='mono-center__link'>Segundo</a>
        </li>
        <li className="nav-item border border-secondary border-end-0 flex-fill">
          <a onClick={(e)=>handleActive(e)} className="nav-link text-center rounded-0" href="#mono-right" id='mono-right__link'>Tercero</a>
        </li>
      </ul>
      </nav>
      <form className="w-100 h-100 d-flex flex-nowrap overflow-hidden" >
        <div id="mono-left" className="login-form__div w-100 h-100 d-flex flex-column justify-content-evenly align-items-center align-content-center">
          <div className='col-11 d-flex flex-column flex-wrap h-75 border border-secondary align-content-around'>
              <div className="d-flex align-items-center m-3 w-25">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Marca" name='brand' value={form.brand}/>
              </div>
              <div className="d-flex align-items-center m-3 w-25">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Rpm" name='rpm' value={form.rpm}/>
              </div>
              <div className="d-flex align-items-center m-3 w-25">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Dim. Mayor" name='minorDim' value={form.minorDim}/>
              </div>
              <div className="d-flex align-items-center m-3 w-25">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Modelo" name='model' value={form.model}/>
              </div>
              <div className="d-flex align-items-center m-3 w-25">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Hp" name='hp' value={form.hp}/>
              </div>
              <div className="d-flex align-items-center m-3 w-25">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Dim. Menor" name='majorDim' value={form.majorDim}/>
              </div>
              <div className="d-flex align-items-center m-3 w-25">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Dueño" name='owner' value={form.owner}/>
              </div>
              <div className="d-flex align-items-center m-3 w-25">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Ranuras" name='slots' value={form.slots}/>
              </div>
              <div className="d-flex align-items-center m-3 w-25">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Largo" name='large' value={form.large}/>
              </div>
              <div className="d-flex align-items-center m-3 w-25">
                <select onChange={(e)=>handleChange(e)} className="form-select border-secondary" id="inputGroupSelect01" name='startType' value={form.startType}>
                  <option value="" disabled defaultChecked>Tipo de Arranque</option>
                  <option value="plaqueta">Plaqueta</option>
                  <option value="condesandor">Condesador</option>
                </select>
              </div>
              {form.startType === 'condesandor' ? 
              <div className="d-flex align-items-center m-3 w-25">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Capacidad μF" name='uf' value={form.uf}/>
              </div>
              :
              ''
              }
          </div>
        </div>
        <div id="mono-center" className="login-form__div w-100 h-100 d-flex justify-content-evenly align-items-center">
          <div className=' col-11 d-flex flex-column border border-secondary w-25 position-relative p-2'>
            <p className="mono-lable fw-semibold position-absolute start-50 bg-white translate-middle ">Trabajo</p>
            <div className="d-flex align-items-center m-2 ">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Paso" name='workSteps' value={form.workSteps}/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Vuelta" name='workLaps' value={form.workLaps}/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Alambre" name='workWire' value={form.workWire}/>
            </div>
          </div>
          <div className=' col-11 d-flex flex-column border border-secondary w-25 position-relative p-2'>
            <p className="mono-lable fw-semibold position-absolute start-50 bg-white translate-middle">Arranque</p>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Paso" name='startSteps' value={form.startSteps}/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Vuelta" name='startLaps' value={form.startLaps}/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Alambre" name='startWire' value={form.startWire}/>
            </div>
          </div>
          <div className=' col-11 d-flex flex-column border border-secondary w-25 p-2'>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Voltaje" name='voltage' value={form.voltage}/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Conexión" name='connection' value={form.connection}/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Tipo de Bobinado" name='windingType' value={form.windingType}/>
            </div>
          </div>
        </div>
        <div id="mono-right" className="login-form__div w-100 h-100 d-flex justify-content-center align-items-center">
          <div className="col-12  d-flex flex-column align-items-center justify-content-evenly h-100">
            <div className="form-floating w-75 h-75">
              <textarea onChange={(e)=>handleChange(e)} className="form-control h-100 border-secondary" placeholder="Leave a comment here" id="floatingTextarea" name='observations' value={form.observations}></textarea>
              <label htmlFor="floatingTextarea">Observaciones</label>
            </div>
            <button type="button" className="btn btn-primary col-6 col-lg-4">Guardar</button>
          </div>
        </div>
      </form>
      </div>
    </section>
  );
}

export default Monophasic;