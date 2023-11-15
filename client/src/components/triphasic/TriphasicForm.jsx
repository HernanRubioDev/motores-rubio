import Loader from "../Loader";


const TriphasicForm = ({width, form, loading, handleChange, handleReset, registerMotor})=>{
  return(
    <>
    <form onSubmit={(e)=>registerMotor(e, form)} className={`left-menu bg-body-tertiary d-flex flex-column flex-shrink-0 align-items-center justify-content-between ${width < 992 ? 'offcanvas offcanvas-start' : 'show'} col-12 col-sm-5 col-md-4 col-lg-3 shadow`} id="offcanvasExample">
      <div className="d-flex w-100 position-relative">
        <button type="button" className="btn-close position-absolute mt-2 me-2 end-0 d-lg-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        <h5 className="fs-4 text-center fw-bold text-body-secondary w-100 py-2 bg-body-secondary">Nuevo Trifásico</h5>
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
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Paso" name='steps' value={form.steps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Vueltas" name='laps' value={form.laps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Alambre" name='wire' value={form.wire}/>
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

export default TriphasicForm;