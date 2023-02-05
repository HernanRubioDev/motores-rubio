import { useState } from 'react';
import useActive from '../hooks/useActive';
import { useApi } from '../hooks/useApi';
import useForm from '../hooks/useForm';
import Loader from './Loader';

const Washer = ()=>{

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
    centWorksteps:'',
    centWorklaps:'',
    centWorkwire:'',
    centStartSteps:'',
    centStartLaps:'',
    centStartWire:'',
    centVoltage:'',
    centConnection:'',
    centwindingType:'',
    centCapacity:'',
    washWorkfSteps:'',
    washWorkfLaps:'',
    washWorkfWire:'',
    washWorksSteps:'',
    washWorksLaps:'',
    washWorksWire:'',
    washStartSteps:'',
    washStartLaps:'',
    washStartWire:'',
    observations:''
  }

  const [activeBtn, setActiveBtn] = useState('washer-left__link');
  const {changeActive} = useActive();
  const {handleChange, form} = useForm(initialForm);
  const {addNewMotor, loading} = useApi();

  const handleActive = (e)=>{
    changeActive(e, activeBtn, setActiveBtn);
  }

return(
<section className="d-flex flex-column container-fluid justify-content-evenly align-items-center h-100 w-100 bg-body-secondary ">
    <div className="w-75 h-100 m-2 border border-secondary border-top-0 bg-white d-flex flex-column box-shadow">
    <h3 className='fs-3 fw-bold text-white text-center bg-dark m-0 p-1'>Nuevo Lavarropas Automático</h3>
      <nav className="w-100 d-flex flex-nowrap flex-row justify-content-evenly list-group">
      <ul className="nav nav-pills w-100 bg-dark">  
        <li className="nav-item border border-secondary border-start-0 flex-fill">
          <a onClick={(e)=>handleActive(e)} className="nav-link text-center rounded-0 text-white fw-bold active pressed-btn" href="#washer-left" id="washer-left__link">Información</a>
        </li>
        <li className="nav-item border border-secondary border-start-0 border-end-0 flex-fill">
          <a onClick={(e)=>handleActive(e)} className="nav-link text-center rounded-0 text-white fw-bold" href="#washer-center" id="washer-center__link">Detalles</a>
        </li>
        <li className="nav-item border border-secondary border-end-0 flex-fill">
          <a onClick={(e)=>handleActive(e)} className="nav-link text-center rounded-0 text-white fw-bold" href="#washer-right" id="washer-right__link">Comentarios</a>
        </li>
      </ul>
      </nav>
      <form name='washer' className="w-100 h-100 d-flex flex-nowrap overflow-hidden" >
        <div id="washer-left" className="login-form__div w-100 h-100 d-flex flex-column justify-content-evenly align-items-center align-content-center">
          <div className='col-11 d-flex flex-wrap h-75 border border-secondary justify-content-evenly align-items-center'>
            <div className='d-flex flex-column justify-content-evenly border border-secondary align-items-center h-50 w-25'>
              <div className="d-flex align-items-center m-2">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Marca" name='brand' value={form.brand}/>
              </div>
              <div className="d-flex align-items-center m-2">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Rpm" name='rpm' value={form.rpm}/>
              </div>
              <div className="d-flex align-items-center m-2">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Dim. Mayor" name='majorDim' value={form.majorDim}/>
              </div>
            </div>
            <div className='d-flex flex-column justify-content-evenly border border-secondary align-items-center h-50 w-25'>
              <div className="d-flex align-items-center m-2">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Modelo" name='model' value={form.model}/>
              </div>
              <div className="d-flex align-items-center m-2">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Hp" name='hp' value={form.hp}/>
              </div>
              <div className="d-flex align-items-center m-2">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Dim. Menor" name='minorDim' value={form.minorDim}/>
              </div>
            </div>
            <div className='d-flex flex-column justify-content-evenly border border-secondary align-items-center h-50 w-25'>
              <div className="d-flex align-items-center m-2">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Dueño" name='owner' value={form.owner}/>
              </div>
              <div className="d-flex align-items-center m-2">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Ranura" name='slots' value={form.slots}/>
              </div>
              <div className="d-flex align-items-center m-2">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Largo" name='large' value={form.large}/>
              </div>
            </div>
          </div>
        </div>
        <div id="washer-center" className="login-form__div w-100 h-100 d-flex flex-column justify-content-evenly align-items-center">
          <div className="w-75 border border-secondary d-flex align-items-center justify-content-evenly position-relative">
            <h6 className="position-absolute top-0 start-50 translate-middle bg-white">Centrifugado</h6>
            <div className=' col-11 d-flex flex-column border border-secondary w-25 position-relative p-2'>
            <p className="mono-lable fw-semibold position-absolute start-50 bg-white translate-middle">Trabajo</p>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Paso" name='centWorksteps' value={form.centWorksteps}/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Vuelta" name='centWorklaps' value={form.centWorklaps}/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Alambre" name='centWorkwire' value={form.centWorkwire}/>
            </div>
          </div>
          <div className=' col-11 d-flex flex-column border border-secondary w-25 position-relative p-2'>
            <p className="mono-lable fw-semibold position-absolute start-50 bg-white translate-middle">Arranque</p>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Paso" name='centStartSteps' value={form.centStartSteps}/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Vuelta" name='centStartLaps' value={form.centStartLaps}/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Alambre" name='centStartWire' value={form.centStartWire}/>
            </div>
          </div>
          <div className='d-flex  flex-wrap w-25 border border-secondary p-2'>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Voltaje" name='centVoltage' value={form.centVoltage}/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Conexion" name='centConnection' value={form.centConnection}/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Tipo de Bobinado" name='centwindingType' value={form.centwindingType}/>
            </div>
            <div className="d-flex flex-wrap align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Capacidad" name='centCapacity' value={form.centCapacity}/>
            </div>
          </div>
          </div>
          <div className="w-75 border border-secondary d-flex align-items-center justify-content-evenly position-relative h-50">
            <h6 className="position-absolute top-0 start-50 translate-middle bg-white">Lavado</h6>
            <div className=' col-11 d-flex flex-column border border-secondary w-25 position-relative p-2'>
            <p className="mono-lable fw-semibold position-absolute start-50 bg-white translate-middle">Trabajo</p>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Paso" name='washWorkfSteps' value={form.washWorkfSteps}/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Vueltas" name='washWorkfLaps' value={form.washWorkfLaps}/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Alambre" name='washWorkfWire' value={form.washWorkfWire}/>
            </div>
          </div>
          <div className=' col-11 d-flex flex-column border border-secondary w-25 position-relative p-2'>
            <p className="mono-lable fw-semibold position-absolute start-50 bg-white translate-middle">Trabajo</p>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Paso" name='washWorksSteps' value={form.washWorksSteps}/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Vueltas" name='washWorksLaps' value={form.washWorksLaps}/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Alambre" name='washWorksWire' value={form.washWorksWire}/>
            </div>
          </div>
          <div className=' col-11 d-flex flex-column border border-secondary w-25 position-relative p-2'>
            <p className="mono-lable fw-semibold position-absolute start-50 bg-white translate-middle">Arranque</p>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Paso" name='washStartSteps' value={form.washStartSteps}/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Vueltas" name='washStartLaps' value={form.washStartLaps}/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Alambre" name='washStartWire' value={form.washStartWire}/>
            </div>
          </div>
          </div>
          </div>
        <div id="washer-right" className="login-form__div w-100 h-100 d-flex justify-content-center align-items-center">
          <div className="w-75 d-flex flex-column align-items-center justify-content-evenly h-100">
            <div className="form-floating w-75 h-75">
              <textarea onChange={(e)=>handleChange(e)} className="form-control border-secondary h-100" placeholder="Leave a comment here" id="floatingTextarea" name='observations' value={form.observations}></textarea>
              <label htmlFor="floatingTextarea">Observaciones</label>
            </div>
            {loading ? <Loader />
            :
            <button onClick={()=>addNewMotor(form)} type="button" className="btn btn-primary col-6 col-lg-4">Guardar</button>
            }
          </div>
        </div>
      </form>
      </div>
</section>
);
}

export default Washer;