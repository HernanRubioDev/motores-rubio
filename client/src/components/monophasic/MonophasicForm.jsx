import { useEffect } from "react";
import Loader from "../Loader";

const MonophasicForm = ({width, form, loading, setForm, handleChange, handleReset, registerMotor})=>{

  useEffect(()=>{
    if(form.motor_start==='plaqueta'){
      setForm({
        ...form,
        uf: '',
      });
    }
  },[form.motor_start])

  return(
    <>
    <form onSubmit={(e)=>registerMotor(e, form)} className={`left-menu bg-body-tertiary d-flex flex-column flex-shrink-0 align-items-center justify-content-between ${width < 992 ? 'offcanvas offcanvas-start' : 'show'} col-12 col-sm-5 col-md-4 col-lg-3 shadow`} id="offcanvasExample">
      <div className="d-flex w-100 position-relative">
        <button type="button" className="btn-close position-absolute mt-2 me-2 end-0 d-lg-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        <h5 className="fs-4 text-center fw-bold text-body-tertiary w-100 py-2 bg-body-secondary">Nuevo Monofásico</h5>
      </div>
      <div className=" d-flex flex-column flex-column flex-grow-1 justify-content-between border-bottom border-secondary-subtle overflow-y-auto px-4 w-100">
      <span className='fw-medium text-body-secondary'>Información</span>
        <div className="mb-3 position-relative">
          <input onChange={(e)=>handleChange(e)} className="form-control" type="text" placeholder="Marca" name='brand' value={form.brand}/>
          <span className="text-danger text-opacity-75 fw-bold fs-5 position-absolute top-50 end-0 translate-middle-y me-1">*</span>
        </div>
        <div className="mb-3 position-relative">
          <input onChange={(e)=>handleChange(e)} className="form-control" type="text" placeholder="Dueño" name='owner' value={form.owener}/>
          <span className="text-danger text-opacity-75 fw-bold fs-5 position-absolute top-50 end-0 translate-middle-y me-1">*</span>
        </div>
        <div className="mb-3 position-relative">
          <input onChange={(e)=>handleChange(e)} className="form-control" type="text" placeholder="Rpm" name='rpm' value={form.rpm}/>
          <span className="text-danger text-opacity-75 fw-bold fs-5 position-absolute top-50 end-0 translate-middle-y me-1">*</span>
        </div>
        <div className="mb-3 position-relative">
          <input onChange={(e)=>handleChange(e)} className="form-control" type="text" placeholder="Hp" name='hp' value={form.hp}/>
          <span className="text-danger text-opacity-75 fw-bold fs-5 position-absolute top-50 end-0 translate-middle-y me-1">*</span>
        </div>
        <div className="mb-3 position-relative">
          <input onChange={(e)=>handleChange(e)} className="form-control" type="text" placeholder="Largo" name='large' value={form.large}/>
          <span className="text-danger text-opacity-75 fw-bold fs-5 position-absolute top-50 end-0 translate-middle-y me-1">*</span>
        </div>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Modelo" name='model' value={form.model}/>
        <select onChange={(e)=> handleChange(e)} className="form-select mb-3 mt-2" aria-label="Default select example" name='motor_start'>
          <option value='plaqueta' defaultChecked disabled>Tipo de arranque</option>
          <option value="plaqueta">Plaqueta</option>
          <option value="condensador">Condesador</option>
        </select>
        {form.motor_start === 'condensador' ? 
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Capacidad µF" name='uf' value={form.uf} />
        : 
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Capacidad µF" name='uf' value={form.uf} disabled/>
        }
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Ranura" name='slots' value={form.slots}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Dim. Mayor" name='major_dim' value={form.major_dim}/>

        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Dim. Menor" name='minor_dim' value={form.minor_dim}/>
        <span className='fw-medium text-body-secondary'>Trabajo</span>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Paso" name='work_steps' value={form.work_steps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Vueltas" name='work_laps' value={form.work_laps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Alambre" name='work_wire' value={form.work_wire}/>
        <span className='fw-medium text-body-secondary'>Arranque</span>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Paso" name='start_steps' value={form.start_steps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Vueltas" name='start_laps' value={form.start_laps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Alambre" name='start_wire' value={form.start_wire}/>
        <span className='fw-medium text-body-secondary'>Información adicional</span>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Voltaje" name='voltage' value={form.voltage}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Conexión" name='connection' value={form.connection}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Tipo de bobinado" name='winding_type' value={form.winding_type}/>
        <span className='fw-medium text-body-secondary'>Observaciones</span>
        <textarea onChange={(e)=>handleChange(e)}  className="form-control resize-none mb-3 text-start" placeholder='...' name='observations' value={form.observations}/>
      </div>
      <div className="d-flex justify-content-evenly w-100">
        {loading ? 
        <Loader /> : 
        <>
        <div className="w-50 my-2 mx-2 position-relative">
          <input type="submit" className="btn btn-sm btn-success w-100" value="Agregar" disabled={!form.brand || !form.owner || !form.rpm || !form.large ? true : false}/>
          <i className="fas fa-plus me-1 position-absolute top-50 start-0 translate-middle-y text-white ms-4"></i>
        </div>
        <div className="w-50 my-2 mx-2 position-relative">
         <input type="reset" onClick={()=>handleReset()} className="btn btn-sm btn-danger w-100" value="Limpiar"/>
         <i className="fas fa-eraser me-2 position-absolute top-50 start-0 translate-middle-y text-white ms-4"></i>
        </div>
        </>
        }
      </div>
    </form>
    <button className="align-self-center border-0 bg-transparent d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"><img src="icons/open-arrow.svg" /></button>
    </>
  );
}

export default MonophasicForm;