import { useApi } from "../hooks/useApi";
import useForm from "../hooks/useForm";

const Search = ()=>{

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
    motorType:'',
    startType:'',
  }

  const {handleChange, form} = useForm(initialForm);
  const {getAllMotors} = useApi();
  return(
    <section className="d-flex flex-column p-3 container-fluid justify-content-center align-items-center h-100 w-100 bg-body-secondary">
      <h3 className="text-secondary fw-bold">Buscar</h3>
      <div className="w-75 h-100 border border-secondary bg-white d-flex flex-column align-items-center justify-content-between box-shadow">
        <form className=" w-100 h-75 d-flex flex-wrap overflow-hidden px-3 m-3 align-items-start">
          <div className="d-flex h-50 w-75 border border-secondary border-end-0 flex-wrap align-items-center justify-content-evenly">
              <div className="d-flex align-items-center m-2 w-25">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Marca" name='brand' value={form.brand}/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Rpm" name='rpm' value={form.rpm}/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Dim. Mayor" name='majorDim' value={form.majorDim}/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Modelo" name='model' value={form.model}/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Hp" name='hp' value={form.hp}/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Dim. Menor" name='minorDim' value={form.minorDim}/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Dueño" name='owner' value={form.owner}/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Ranura" name='slots' value={form.slots}/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Largo" name='large' value={form.large}/>
              </div>
          </div>
          <div className="border border-secondary h-50 w-25 d-flex flex-column align-items-center justify-content-evenly">
              <div className="d-flex align-items-center m-3 w-75">
                <select onChange={(e)=>handleChange(e)} className="form-select onChange={(e)=>handleChange(e)} border-secondary" id="inputGroupSelect01" name='motorType' value={form.motorType}>
                  <option value='' disabled>Tipo de Motor</option>
                  <option value="monophasic">Monofásico</option>
                  <option value="triphasic">Trifásico</option>
                  <option value="washer">Lavarropas Automático</option>
                </select>
              </div>
              <div className="d-flex align-items-center m-3 w-75">
                <select onChange={(e)=>handleChange(e)} className="form-select onChange={(e)=>handleChange(e)} border-secondary" id="inputGroupSelect02" name='startType' value={form.startType}>
                  <option value='' disabled>Tipo de Arranque</option>
                  <option value="plaqueta">Plaqueta</option>
                  <option value="condensador">Condensador</option>
                </select>
              </div>
          </div>
          <div className="w-100 d-flex align-items-center justify-content-evenly">
          <button type="button" className="btn btn-primary w-25">Buscar Motor</button>
          <button onClick={()=>getAllMotors()} type="button" className="btn btn-primary w-25">Ver Todos</button>
          <button type="button" className="btn btn-primary w-25">Nueva Busqueda</button>
          </div>
        </form>
        <table className="table table-secondary table-striped table table-bordered">
          <thead>
            <tr>
              <th scope="col">Motores</th>
              <th scope="col">Marca</th>
              <th scope="col">Dim.Mayor</th>
              <th scope="col">Min. Menor</th>
              <th scope="col">Largo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Genalex</td>
              <td>165</td>
              <td>95</td>
              <td>50</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Genalex</td>
              <td>165</td>
              <td>95</td>
              <td>50</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Genalex</td>
              <td>165</td>
              <td>95</td>
              <td>50</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Genalex</td>
              <td>165</td>
              <td>95</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Search;