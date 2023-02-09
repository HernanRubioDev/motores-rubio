import useForm from "../hooks/useForm";
import { useMotor } from "../hooks/useMotor";
import Loader from "./Loader";
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

  const {handleChange, form} = useForm(initialForm);
  const{getMotors, delMotor, getAllMotors, loading, motors} = useMotor();

  return(
    <section className="bg-img d-flex flex-column p-0 p-lg-3 container-fluid justify-content-center align-items-center h-100 w-100 bg-body-secondary overflow-hidden">
      <div className="d-flex flex-column h-100 border border-secondary bg-white box-shadow col-12 col-lg-9">
        <h3 className="text-center fw-bold fs-3 text-secondary p-2 m-0 bg-dark text-white">Buscar</h3>
        <form className="d-flex flex-column justify-content-evenly h-60 col-12">
          <div className="d-flex col-12 justify-content-evenly">
            <div className="d-flex flex-column align-items-center border border-secondary col-lg-3">
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
            <div className="d-flex flex-column align-items-center border border-secondary col-lg-3">
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
            <div className="d-flex flex-column align-items-center border border-secondary col-lg-3">
              <div className="d-flex align-items-center m-3">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary" placeholder="Dueño" name='owner' value={form.owner}/>
              </div>
              <div className="d-flex align-items-center m-3">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary" placeholder="Ranura" name='slots' value={form.slots}/>
              </div>
              <div className="d-flex align-items-center m-3">
                <input onChange={(e)=>handleChange(e)} type="text" className="form-control border-secondary" placeholder="Largo" name='large' value={form.large}/>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-evenly col-12 border-bottom ">
            <div className="d-flex align-items-center m-3 co-5">
              <select onChange={(e)=>handleChange(e)} className="form-select border-secondary" id="inputGroupSelect01" name='motorType' value={form.motorType}>
                <option value='' disabled defaultChecked>Tipo de Motor</option>
                <option value="monophasic">Monofásico</option>
                <option value="triphasic">Trifásico</option>
                <option value="washer">Lavarropas Automático</option>
              </select>
            </div>
            {form.motorType === "monophasic" ?
            <div className="d-flex align-items-center m-3 co-5">
              <select onChange={(e)=>handleChange(e)} className="form-select border-secondary" id="inputGroupSelect02" name='startType' value={form.startType}>
                <option value='' disabled defaultChecked>Tipo de Arranque</option>
                <option value="plaqueta">Plaqueta</option>
                <option value="condensador">Condensador</option>
              </select>
            </div>
            :
            ''
            }
          </div>
          <div className="d-flex justify-content-evenly col-12">
            <button onClick={()=>getMotors(form)} type="button" className="btn btn-primary col-3 col-lg-2">Buscar</button>
            <button onClick={()=>getAllMotors(initialForm)} type="button" className="btn btn-primary col-3 col-lg-2">Ver Todos</button>
            <button type="reset" className="btn btn-primary col-3 col-lg-2">Limpiar</button>
          </div>
        </form>
        <div className="d-flex justify-content-center overflow-y-auto border-top border-dark">
          {loading ? <Loader /> 
          :
          <table className="table table-light table-striped table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Marca</th>
                <th scope="col">Dueño</th>
                <th scope="col">Dim.Mayor</th>
                <th scope="col">Dim. Menor</th>
                <th scope="col">Largo</th>
                <th scope="col">Acción</th>
              </tr>
            </thead>
            <tbody>
              {motors !== null && motors !== undefined ? motors.map(motor => <MotorTableRow  key={motor.id} motor={motor} delMotor={delMotor}/>) 
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
          }
        </div>
      </div>
    </section>
  );
}

export default Search;