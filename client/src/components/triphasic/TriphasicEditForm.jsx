const TriphasicEditForm = ({dataToEdit, handleEdit})=>{
  const {brand, model, owner, hp, rpm, large, slots, major_dim, minor_dim, steps, laps, wire, voltage, connection, winding_type, observations} = dataToEdit
  return(
    <div className="d-flex flex-column h-100 w-100 align-self-center px-lg-3 pt-1 overflow-y-auto">
       <div className="w-100">
        <table className="table table-responsive table-striped shadow">
          <thead className="text-center z-0">
            <tr className='table-secondary text-white'>
              <th colSpan='3' className='bg-secondary text-white text-start'>Información</th>
            </tr>
            <tr>
              <th scope="col" >Marca</th>
              <th  scope="col" >Modelo</th>
              <th scope="col" >Dueño</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center border-0 bg-transparent" type="text" placeholder="-" name='brand' value={brand || ''}/></td>
              <td ><input onChange={(e)=>handleEdit(e)} className="form-control text-center border-0 bg-transparent" type="text" placeholder="-" name='model' value={model || ''}/></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center border-0 bg-transparent" type="text" placeholder="-" name='owner' value={owner || ''}/></td>
            </tr>
          </tbody>     
          <thead className="text-center z-0">
            <tr>
              <th scope="col" >Hp</th>
              <th  scope="col" >Rpm</th>
              <th scope="col" >Largo</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center border-0 bg-transparent" type="text" placeholder="-" name='hp' value={hp || ''}/></td>
              <td  ><input onChange={(e)=>handleEdit(e)} className="form-control text-center border-0 bg-transparent" type="text" placeholder="-" name='rpm' value={rpm || ''}/></td>
              <td ><input onChange={(e)=>handleEdit(e)} className="form-control text-center border-0 bg-transparent" type="text" placeholder="-" name='large' value={large || ''}/></td>
            </tr>
          </tbody>     
          <thead className="text-center  z-0">
            <tr>
              <th scope="col" >Ranuras</th>
              <th  scope="col" >Dim. Mayor</th>
              <th scope="col" >Dim. Menor</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center border-0 bg-transparent" type="text" placeholder="-" name='slots' value={slots || ''}/></td>
              <td ><input onChange={(e)=>handleEdit(e)} className="form-control text-center border-0 bg-transparent" type="text" placeholder="-" name='major_dim' value={major_dim || ''}/></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center border-0 bg-transparent" type="text" placeholder="-" name='minor_dim' value={minor_dim || ''}/></td>
            </tr>
          </tbody>     
          <thead className="text-center z-0">
            <tr>
              <th scope="col" >Paso</th>
              <th  scope="col" >Vueltas</th>
              <th scope="col" >Alambre</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center border-0 bg-transparent" type="text" placeholder="-" name='steps' value={steps || ''}/></td>
              <td ><input onChange={(e)=>handleEdit(e)} className="form-control text-center border-0 bg-transparent" type="text" placeholder="-" name='laps' value={laps || ''}/></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center border-0 bg-transparent" type="text" placeholder="-" name='wire' value={wire || ''}/></td>
            </tr>
          </tbody>     
          <thead className="text-center z-0">
            <tr className='table-secondary text-white'>
              <th colSpan='3' className='bg-secondary text-white  text-start' >Información adicional</th>
            </tr>
            <tr>
              <th scope="col" >Voltaje</th>
              <th  scope="col" > Conexión</th>
              <th scope="col" >Tipo de bobinado</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center border-0 bg-transparent" type="text" placeholder="-" name='voltage' value={voltage || ''}/></td>
              <td ><input onChange={(e)=>handleEdit(e)} className="form-control text-center border-0 bg-transparent" type="text" placeholder="-" name='connection' value={connection || ''}/></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center border-0 bg-transparent" type="text" placeholder="-" name='winding_type' value={winding_type || ''}/></td>
            </tr>
          </tbody>
          <thead className="text-center  z-0">
            <tr>
              <th colSpan='3' scope="col" >Observaciones</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td colSpan='3'><input onChange={(e)=>handleEdit(e)} className="form-control text-center border-0 bg-transparent" type="text" placeholder="-" name='observations' value={observations || ''}/></td>
            </tr>
          </tbody>       
        </table>
      </div>
    </div>
  );
}

export default TriphasicEditForm;