import Loader from "../Loader";

const WasherForm = ({width, form, loading, handleChange, handleReset, registerMotor})=>{
  return(
    <>
    <form onSubmit={(e)=>registerMotor(e, form)} className={`left-menu bg-body-tertiary d-flex flex-column flex-shrink-0 align-items-center justify-content-between col-12 ${width < 992 ? 'offcanvas offcanvas-start' : 'show'} col-sm-5 col-md-4 col-lg-3`}  id="offcanvasExample">
      <div className="d-flex w-100 position-relative">
        <button type="button" className="btn-close position-absolute mt-2 me-2 end-0 d-lg-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        <h5 className="fs-4 text-center fw-bold text-body-secondary bg-body-secondary w-100 py-2">Nuevo Lavarropas</h5>
      </div>
      <div className=" d-flex flex-column flex-column flex-grow-1 justify-content-between border-bottom border-secondary-subtle overflow-y-auto px-4 w-100">
      <span className='fw-medium text-body-secondary'>Información</span>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Marca" name='brand' value={form.brand}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Modelo" name='model' value={form.model}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Dueño" name='owner' value={form.owener}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Hp" name='hp' value={form.hp}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Rpm" name='rpm' value={form.rpm}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Largo" name='large' value={form.large}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Ranura" name='slots' value={form.slots}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Dim. Mayor" name='major_dim' value={form.major_dim}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Dim. Menor" name='minor_dim' value={form.minor_dim}/>
        <span className='fw-medium text-body-secondary text-center '>Centrifugado</span>
        <span className='fw-medium text-body-secondary'>Trabajo</span>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Paso" name='spin_work_steps' value={form.spin_work_steps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Vueltas" name='spin_work_laps' value={form.spin_work_laps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Alambre" name='spin_work_wire' value={form.spin_work_wire}/>
        <span className='fw-medium text-body-secondary'>Arranque</span>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Paso" name='spin_start_steps' value={form.spin_start_steps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Vueltas" name='spin_start_laps' value={form.spin_start_laps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Alambre" name='spin_start_wire' value={form.spin_start_wire}/>
        <span className='fw-medium text-body-secondary text-center '>Lavado</span>
        <span className='fw-medium text-body-secondary'>Trabajo</span>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Paso" name='first_wash_work_steps' value={form.first_wash_work_steps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Vueltas" name='first_wash_work_laps' value={form.first_wash_work_laps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Alambre" name='first_wash_work_wire' value={form.first_wash_work_wire}/>
        <span className='fw-medium text-body-secondary'>Trabajo</span>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Paso" name='second_wash_work_steps' value={form.second_wash_work_steps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Vueltas" name='second_wash_work_laps' value={form.second_wash_work_laps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Alambre" name='second_wash_work_wire' value={form.second_wash_work_wire}/>
        <span className='fw-medium text-body-secondary'>Arranque</span>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Paso" name='wash_start_steps' value={form.wash_start_steps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Vueltas" name='wash_start_laps' value={form.wash_start_laps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Alambre" name='wash_start_wire' value={form.wash_start_wire}/>
        <span className='fw-medium text-body-secondary'>Información adicional</span>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Voltaje" name='voltage' value={form.voltage}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Conexión" name='connection' value={form.connection}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Tipo de bobinado" name='winding_type' value={form.winding_type}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Capacidad" name='capacity' value={form.capacity}/>
        <span className='fw-medium text-body-secondary'>Observaciones</span>
        <textarea onChange={(e)=>handleChange(e)}  className="form-control resize-none mb-3 text-start" placeholder='...' name='observations' value={form.observations}/>
      </div>
      <div className="d-flex justify-content-evenly w-100">
        {loading ? 
        <Loader /> : 
        <>
        <div className="w-50 my-2 mx-2 position-relative">
          <input type="submit" className="btn btn-sm btn-success w-100" value="Agregar"/>
          <i className="fas fa-plus me-1 position-absolute top-50 start-0 translate-middle-y ms-4 text-white"></i>
        </div>
        <div className="w-50 my-2 mx-2 position-relative">
         <input type="reset" onClick={()=>handleReset()} className="btn btn-sm btn-danger w-100" value="Limpiar"/>
         <i className="fas fa-eraser me-2 position-absolute top-50 start-0 translate-middle-y ms-4 text-white"></i>
        </div>
        </>
        }
      </div>
    </form>
    <button className="align-self-center border-0 bg-transparent d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"><img  src="icons/open-arrow.svg" /></button>
    </>
  );
}

export default WasherForm;