
import Loader from "../Loader";

const MonophasicForm = ({width, form, loading, handleChange, registerMonophasic})=>{


  return(
    <>
    <form onSubmit={(e)=>registerMonophasic(e, form)} className={`monophasic-menu bg-body-tertiary d-flex flex-column flex-shrink-0 align-items-center justify-content-between ${width < 992 ? 'offcanvas offcanvas-start' : '' } `} id="offcanvasMonophasic">
      <div className="d-flex w-100 position-relative">
        <button type="button" className="btn-close position-absolute mt-2 me-2 end-0 d-lg-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        <h5 className="fs-4 text-center fw-bold text-body-secondary w-100 py-2 bg-body-secondary">Nuevo Monofásico</h5>
      </div>
      <div className=" d-flex flex-column flex-column flex-grow-1 justify-content-between border-bottom border-secondary-subtle overflow-y-auto px-4 w-100">
      <span className='fw-medium text-body-secondary'>Información</span>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Marca" name='brand' value={form.brand}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Modelo" name='model' value={form.model}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Dueño" name='owner' value={form.owener}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Hp" name='hp' value={form.hp}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Rpm" name='rpm' value={form.rpm}/>
        <select onChange={(e)=> handleChange(e)} className="form-select mb-3 mt-2" aria-label="Default select example" name='start_type'>
          <option value='' defaultChecked>Tipo de arranque</option>
          <option value="plaqueta">Plaqueta</option>
          <option value="condensador">Condesador</option>
        </select>
        {form.start_type === 'condensador' ? 
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Capacidad µF" name='uf' value={form.uf}/>
        : 
        ''
        }
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Largo" name='large' value={form.large}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Ranura" name='slots' value={form.slots}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Dim. Mayor" name='majorDim' value={form.major_dim}/>

        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Dim. Menor" name='minorDim' value={form.minor_dim}/>
        <span className='fw-medium text-body-secondary'>Trabajo</span>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Paso" name='workSteps' value={form.work_steps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Vueltas" name='workLaps' value={form.work_laps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Alambre" name='workWire' value={form.work_wire}/>
        <span className='fw-medium text-body-secondary'>Arranque</span>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Paso" name='startSteps' value={form.start_steps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Vueltas" name='startLaps' value={form.start_laps}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Alambre" name='startWire' value={form.start_wire}/>
        <span className='fw-medium text-body-secondary'>Información adicional</span>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Voltaje" name='voltage' value={form.voltage}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Conexión" name='connection' value={form.connection}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Tipo de bobinado" name='windingType' value={form.winding_type}/>
        <span className='fw-medium text-body-secondary'>Observaciones</span>
        <textarea onChange={(e)=>handleChange(e)}  className="form-control resize-none mb-3 text-start" placeholder='...' name='observations' value={form.observations}/>
      </div>
      <div className="d-flex justify-content-center w-100">
        {loading ? <Loader /> : <input type="submit" className="btn btn-success col-9 me-3 my-2" value='Agregar'/>}
      </div>
    </form>
    <button className="align-self-center border-0 bg-transparent d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMonophasic"><img src="icons/open-arrow.svg" /></button>
    </>
  );
}

export default MonophasicForm;