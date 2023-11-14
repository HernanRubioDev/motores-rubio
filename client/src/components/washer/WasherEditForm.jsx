const WasherEditForm = ({data, handleEdit})=>{
  const { brand,rpm,minor_dim,model,hp,major_dim,owner,slots,large,spinWorkSteps,spinWorkLaps,spinWorkWire,spinStartSteps,spinStartLaps,spinStartWire,firstWashWorkSteps,firstWashWorkLaps,firstWashWorkWire,secondWashWorkWire,secondWashWorkSteps,secondWashWorkLaps,washStartSteps,washStartLaps,washStartWire,voltage,connection,windingType,capacity,observations} = data
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
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='brand' value={brand}/></td>
              <td colSpan='2'><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='model' value={model}/></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='owner' value={owner}/></td>
            </tr>
          </tbody>     
          <thead className="text-center  z-0">
            <tr>
              <th scope="col" >Hp</th>
              <th colSpan='2' scope="col" >Rpm</th>
              <th scope="col" >Largo</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='hp' value={hp}/></td>
              <td colSpan='2'><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='rpm' value={rpm}/></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='large' value={large}/></td>
            </tr>
          </tbody>     
          <thead className="text-center  z-0">
            <tr>
              <th scope="col" >Ranuras</th>
              <th colSpan='2' scope="col" >Dim. Mayor</th>
              <th scope="col" >Dim. Menor</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='slots' value={slots}/></td>
              <td colSpan='2'><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='major_dim' value={major_dim}/></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='minor_dim' value={minor_dim}/></td>
            </tr>
          </tbody>     
          <thead className="text-center  z-0">
            <tr className='table-secondary text-white'>
              <th colSpan='4' className='bg-secondary text-white  text-start'>Centrifugado - Trabajo</th>
            </tr>
            <tr>
              <th scope="col" >Paso</th>
              <th colSpan='2' scope="col" > Vueltas</th>
              <th scope="col" >Alambre</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='spinWorkSteps' value={spinWorkSteps}/></td>
              <td colSpan='2'><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='spinWorkLaps' value={spinWorkLaps}/></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='spinWorkWire' value={spinWorkWire}/></td>
            </tr>
          </tbody>     
          <thead className="text-center  z-0">
            <tr className='table-secondary text-white'>
              <th className='bg-secondary text-white  text-start' colSpan='4'>Centrifugado - Arranque</th>
            </tr>
            <tr>
              <th scope="col" >Paso</th>
              <th colSpan='2' scope="col" > Vueltas</th>
              <th scope="col" >Alambre</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='spinStartSteps' value={spinStartSteps}/></td>
              <td colSpan='2'><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='spinStartLaps' value={spinStartLaps}/></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='spinStartWire' value={spinStartWire}/></td>
            </tr>
          </tbody>     
          <thead className="text-center z-0">
            <tr className='table-secondary text-white'>
              <th className='bg-secondary text-white  text-start' colSpan='4'>Lavado - Trabajo</th>
            </tr>
            <tr>
              <th scope="col" >Paso</th>
              <th colSpan='2' scope="col" > Vueltas</th>
              <th scope="col" >Alambre</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='firstWashWorkSteps' value={firstWashWorkSteps}/></td>
              <td colSpan='2'><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='firstWashWorkLaps' value={firstWashWorkLaps}/></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='firstWashWorkWire' value={firstWashWorkWire}/></td>
            </tr>
          </tbody>     
          <thead className="text-center  z-0">
            <tr className='table-secondary text-white'>
              <th className='bg-secondary text-white  text-start' colSpan='4'>Lavado - Trabajo</th>
            </tr>
            <tr>
              <th scope="col" >Paso</th>
              <th colSpan='2' scope="col" > Vueltas</th>
              <th scope="col" >Alambre</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='secondWashWorkSteps' value={secondWashWorkSteps}/></td>
              <td colSpan='2'><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='secondWashWorkLaps' value={secondWashWorkLaps}/></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='secondWashWorkWire' value={secondWashWorkWire}/></td>
            </tr>
          </tbody>     
          <thead className="text-center  z-0">
            <tr className='table-secondary text-white'>
              <th className='bg-secondary text-white  text-start' colSpan='4'>Lavado - Arranque</th>
            </tr>
            <tr>
              <th scope="col" >Paso</th>
              <th colSpan='2' scope="col" > Vueltas</th>
              <th scope="col" >Alambre</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='washStartSteps' value={washStartSteps}/></td>
              <td colSpan='2'><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='washStartLaps' value={washStartLaps}/></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='washStartWire' value={washStartWire}/></td>
            </tr>
          </tbody>     
          <thead className="text-center  z-0">
            <tr className='table-secondary text-white'>
              <th className='bg-secondary text-white  text-start' colSpan='4'>Información adicional</th>
            </tr>
            <tr>
              <th scope="col" >Voltaje</th>
              <th scope="col" > Conexión</th>
              <th scope="col" >Tipo de bobinado</th>
              <th scope="col" >Capacidad</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='voltage' value={voltage}/></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='connection' value={connection}/></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='windingType' value={windingType}/></td>
              <td><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='capacity' value={capacity}/></td>
            </tr>
          </tbody>
          <thead className="text-center  z-0">
            <tr>
              <th colSpan='4' scope="col" >Observaciones</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td colSpan='4'><input onChange={(e)=>handleEdit(e)} className="form-control text-center bg-transparent border-0" type="text" placeholder="-" name='observations' value={observations}/></td>
            </tr>
          </tbody>       
        </table>
      </div>
    </div>
  );
}

export default WasherEditForm;