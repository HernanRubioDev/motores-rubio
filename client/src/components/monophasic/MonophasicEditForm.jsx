const MonophasicEditForm = ({dataToEdit, handleEdit})=>{
  const {brand, model, owner, hp, rpm, start_type, uf, slots, major_dim, large, minor_dim, work_steps, work_laps, work_wire, start_steps, start_laps, start_wire, voltage, connection, winding_type, observations} = dataToEdit;
  return(
    <div className="d-flex flex-column h-100 w-100 align-self-center px-lg-3 pt-1 overflow-y-auto">
       <div className="w-100">
        <table className="table table-responsive table-striped shadow">
          <thead className="text-center z-0">
            <tr className='table-secondary text-white'>
              <th colSpan='4' className='bg-secondary text-white text-start'>Información</th>
            </tr>
            <tr>
              <th scope="col" >Marca</th>
              <th colSpan='2' scope="col" >Modelo</th>
              <th scope="col" >Dueño</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='brand' value={brand || ''}/></td>
              <td colSpan='2'><input onChange={(e)=>handleEdit(e)} className="form-control  text-center bg-transparent border-0" type="text" placeholder="-" name='model' value={model || ''}/></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control  text-center bg-transparent border-0" type="text" placeholder="-" name='owner' value={owner || ''}/></td>
            </tr>
          </tbody>     
          <thead className="text-center  z-0">
            <tr>
              <th scope="col" >Hp</th>
              <th scope="col" >Rpm</th>
              <th scope="col" >Arranque</th>
              <th scope="col" >µF</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='hp' value={hp || ''}/></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='rpm' value={rpm || ''}/></td>
              <td>
                <select onChange={(e)=> handleEdit(e)} className="form-select text-center bg-transparent" aria-label="Default select example" name='start_type' value={start_type}>
                  <option value='plaqueta'>Plaqueta</option> 
                  <option value='condensador'>Condensador</option>  
                </select>
              </td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='uf' value={uf || ''}/></td>
            </tr>
          </tbody>     
          <thead className="text-center z-0">
            <tr>
              <th scope="col" >Ranuras</th>
              <th scope="col" >Dim. Mayor</th>
              <th scope="col" >Largo</th>
              <th scope="col" >Dim. Menor</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='slots' value={slots} /></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='major_dim' value={major_dim || ''} /></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='large' value={large || ''} /></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='minor_dim' value={minor_dim || ''} /></td>
            </tr>
          </tbody>     
          <thead className="text-center  z-0">
            <tr className='table-secondary text-white'>
              <th colSpan='4' className='bg-secondary text-white  text-start'>Trabajo</th>
            </tr>
            <tr>
              <th scope="col">Paso</th>
              <th colSpan='2' scope="col" > Vueltas</th>
              <th scope="col">Alambre</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='work_steps' value={work_steps || ''} /></td>
              <td colSpan='2'><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='work_laps' value={work_laps || ''} /></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='work_wire' value={work_wire || ''} /></td>
            </tr>
          </tbody>     
          <thead className="text-center  z-0">
            <tr className='table-secondary text-white'>
              <th className='bg-secondary text-white  text-start' colSpan='4'>Arranque</th>
            </tr>
            <tr>
              <th scope="col">Paso</th>
              <th colSpan='2' scope="col"> Vueltas</th>
              <th scope="col" >Alambre</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='start_steps' value={start_steps || ''} /></td>
              <td colSpan='2'><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='start_laps' value={start_laps || ''} /></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='start_wire' value={start_wire || ''} /></td>
            </tr>
          </tbody>     
          <thead className="text-center  z-0">
            <tr className='table-secondary text-white'>
              <th className='bg-secondary text-white  text-start' colSpan='4'>Información adicional</th>
            </tr>
            <tr>
              <th scope="col">Voltaje</th>
              <th colSpan='2' scope="col"> Conexión</th>
              <th scope="col" >Tipo de bobinado</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='voltage' value={voltage || ''} /></td>
              <td colSpan='2'><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='connection' value={connection || ''} /></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='winding_type' value={winding_type || ''} /></td>
            </tr>
          </tbody>
          <thead className="text-center  z-0">
            <tr>
              <th colSpan='4' scope="col" >Observaciones</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td colSpan='4'><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='observations' value={observations || ''} /></td>
            </tr>
          </tbody>       
        </table>
      </div>
    </div>
  );
}
export default MonophasicEditForm;