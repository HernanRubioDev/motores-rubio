import Loader from "../Loader";

const SearchForm = ({loading, form, width, handleChange, handleReset, getMotor})=>{

  return(
    <>
    <form onSubmit={(e)=>getMotor(e, form)} className={`bg-body-tertiary d-flex flex-column flex-shrink-0 align-items-center justify-content-between col-12 ${width < 992 ? 'offcanvas offcanvas-start' : 'show'} col-sm-5 col-md-4 col-lg-3`} id="offcanvasExample">
      <div className="d-flex w-100 position-relative">
        <button type="button" className="btn-close position-absolute mt-2 me-2 end-0 d-lg-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        <h5 className="fs-4 text-center fw-bold text-body-tertiary w-100 py-2 bg-body-secondary">Buscar Motor</h5>
      </div>
      <div className=" d-flex flex-column flex-column flex-grow-1 justify-content-between border-bottom border-secondary-subtle overflow-y-auto px-4 w-100">
      <select onChange={(e)=> handleChange(e)} className="form-select mb-3 mt-2" aria-label="Default select example" name='motor_type' value={form.motor_type}>
        <option value="" disabled >Tipo de motor</option>
        <option value="monophasic">Monofásico</option>
        <option value="triphasic">Trifásico</option>
        <option value="washer">Lavarropas</option>
      </select>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Marca" name='brand' value={form.brand}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Modelo" name='model' value={form.model}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Dueño" name='owner' value={form.owener}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Hp" name='hp' value={form.hp}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Rpm" name='rpm' value={form.rpm}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Largo" name='large' value={form.large}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Ranura" name='slots' value={form.slots}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Dim. Mayor" name='major_dim' value={form.major_dim}/>
        <input onChange={(e)=>handleChange(e)} className="form-control mb-3" type="text" placeholder="Dim. Menor" name='minor_dim' value={form.minor_dim}/>
      </div>
      <div className="d-flex justify-content-evenly w-100">
        {loading ? 
        <Loader /> : 
        <>
        <button type="submit" className="btn btn-sm btn-success w-50 my-2 mx-3"><i className="fas fa-search me-2"></i>Buscar</button>
        <button type="reset" onClick={()=>handleReset()} className="btn btn-sm btn-danger w-50 my-2 mx-3"><i className="fas fa-eraser me-2"></i>Limpiar</button>
        </>
        }
      </div>
    </form>
    <button className="align-self-center border-0 bg-transparent d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"><img  src="icons/open-arrow.svg" /></button>
    </>
  );
}

export default SearchForm;