
import useForm from "../hooks/useForm";
import {useMotor} from '../hooks/useMotor';
import MotorTableRow from "./MotorTableRow";

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

  const {handleChange, handleSubmit, form} = useForm(initialForm);
  const {motors, getMotors} = useMotor()
  
  return(
    <section className="d-flex flex-column p-3 container-fluid justify-content-center align-items-center h-100 w-100 bg-body-secondary overflow-hidden">
      <div className="d-flex flex-column w-75 h-100 border border-secondary bg-white box-shadow">
        <h3 className="text-center fw-bold fs-3 text-secondary p-2 bg-dark text-white">Buscar</h3>
        <form className="d-flex flex-column justify-content-evenly h-50 w-100">
          <div className="d-flex w-100 justify-content-evenly">
            <div className="d-flex flex-column align-items-center w-25 border border-secondary">
              <div className="d-flex align-items-center m-3">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Marca" name='brand' value={form.brand}/>
              </div>
              <div className="d-flex align-items-center m-3">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Rpm" name='rpm' value={form.rpm}/>
              </div>
              <div className="d-flex align-items-center m-3">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Dim. Mayor" name='majorDim' value={form.majorDim}/>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center w-25 border border-secondary">
              <div className="d-flex align-items-center m-3">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Modelo" name='model' value={form.model}/>
              </div>
              <div className="d-flex align-items-center m-3">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Hp" name='hp' value={form.hp}/>
              </div>
              <div className="d-flex align-items-center m-3">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Dim. Menor" name='minorDim' value={form.minorDim}/>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center w-25 border border-secondary">
              <div className="d-flex align-items-center m-3">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Dueño" name='owner' value={form.owner}/>
              </div>
              <div className="d-flex align-items-center m-3">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Ranura" name='slots' value={form.slots}/>
              </div>
              <div className="d-flex align-items-center m-3">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary"placeholder="Largo" name='large' value={form.large}/>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-evenly w-100 border-bottom ">
            <div className="d-flex align-items-center m-3 w-25">
              <select onChange={(e)=>handleChange(e)} className="form-select border-secondary" id="inputGroupSelect01" name='motorType' value={form.motorType}>
                <option value='' disabled>Tipo de Motor</option>
                <option value="monophasic">Monofásico</option>
                <option value="triphasic">Trifásico</option>
                <option value="washer">Lavarropas Automático</option>
              </select>
            </div>
            <div className="d-flex align-items-center m-3 w-25">
              <select onChange={(e)=>handleChange(e)} className="form-select border-secondary" id="inputGroupSelect02" name='startType' value={form.startType}>
                <option value='' disabled>Tipo de Arranque</option>
                <option value="plaqueta">Plaqueta</option>
                <option value="condensador">Condensador</option>
              </select>
            </div>
          </div>
          <div className="d-flex justify-content-evenly w-100">
          <button onClick={()=>getMotors(form)} type="button" className="btn btn-primary col-2">Buscar Motor</button>
          <button type="reset" className="btn btn-primary col-2">Limpiar</button>
          </div>
        </form>
        <div className="h-50 overflow-y-auto border-top border-dark">
          <table className="table table-light table-striped table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Marca</th>
                <th scope="col">Dueño</th>
                <th scope="col">Dim.Mayor</th>
                <th scope="col">Min. Menor</th>
                <th scope="col">Largo</th>
              </tr>
            </thead>
            <tbody>
              {motors !== null && motors !== undefined ? motors.map(motor => <MotorTableRow key={motor.id} motor={motor} />) 
              :
              <tr>
                <td>sin datos</td>
                <td>sin datos</td>
                <td>sin datos</td>
                <td>sin datos</td>
                <td>sin datos</td>
              </tr>
              }

            </tbody>
          </table>
        </div>
      </div>
    </section>
    
    /*
    <section className="d-flex flex-column p-3 container-fluid justify-content-center align-items-center h-100 w-100 bg-body-secondary">
      <h3 className="text-secondary fw-bold">Buscar</h3>
      <div className="w-75 h-100 border border-secondary bg-white d-flex flex-column align-items-center justify-content-between box-shadow">
        <form name='search' className=" w-100 h-75 d-flex flex-wrap overflow-hidden px-3 m-3 align-items-start">
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
                <select onChange={(e)=>handleChange(e)} className="form-select border-secondary" id="inputGroupSelect01" name='motorType' value={form.motorType}>
                  <option value='' disabled>Tipo de Motor</option>
                  <option value="monophasic">Monofásico</option>
                  <option value="triphasic">Trifásico</option>
                  <option value="washer">Lavarropas Automático</option>
                </select>
              </div>
              <div className="d-flex align-items-center m-3 w-75">
                <select onChange={(e)=>handleChange(e)} className="form-select border-secondary" id="inputGroupSelect02" name='startType' value={form.startType}>
                  <option value='' disabled>Tipo de Arranque</option>
                  <option value="plaqueta">Plaqueta</option>
                  <option value="condensador">Condensador</option>
                </select>
              </div>
          </div>
          <div className="w-100 d-flex align-items-center justify-content-evenly">
          <button onClick={()=>getMotors(form)} type="button" className="btn btn-primary w-25">Buscar Motor</button>
          <button onClick={()=>getMotors(form)} type="button" className="btn btn-primary w-25">Ver Todos</button>
          <button type="reset" className="btn btn-primary w-25">Nueva Busqueda</button>
          </div>
        </form>
        <table className="table table-secondary table-striped table table-bordered">
          <thead>
            <tr>
              <th scope="col">Marca</th>
              <th scope="col">Dueño</th>
              <th scope="col">Dim.Mayor</th>
              <th scope="col">Min. Menor</th>
              <th scope="col">Largo</th>
            </tr>
          </thead>
          <tbody>
            {motors !== null ? motors.map(motor => <MotorTableRow key={motor.id} motor={motor} />) 
            :
            <tr>
              <td>sin datos</td>
              <td>sin datos</td>
              <td>sin datos</td>
              <td>sin datos</td>
              <td>sin datos</td>
            </tr>
            }

          </tbody>
        </table>
      </div>
    </section> */
  );
}

export default Search;