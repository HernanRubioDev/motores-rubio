const MonophasicPreviewView = ({data})=>{
  return(
    <div className="d-flex flex-column h-100 w-100 align-self-center px-lg-3 pt-1 overflow-y-auto">
       <div className="w-100">
        <table className="table table-responsive table-striped shadow">
          <thead className="text-center z-0">
            <tr className='table-secondary text-white'>
              <th colSpan='4' className='bg-secondary bg-opacity-75 text-white text-start'>Información</th>
            </tr>
            <tr>
              <th scope="col" >Marca</th>
              <th colSpan='2' scope="col" >Modelo</th>
              <th scope="col" >Dueño</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td>{data.brand || '-'}</td>
              <td colSpan='2'>{data.model || '-'}</td>
              <td>{data.owner || '-'}</td>
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
              <td>{data.hp || '-'}</td>
              <td >{data.rpm || '-'}</td>
              <td >{data.start_type || 'plaqueta'}</td>
              <td>{data.uf || '-'}</td>
            </tr>
          </tbody>     
          <thead className="text-center  z-0">
            <tr>
              <th scope="col" >Ranuras</th>
              <th scope="col" >Dim. Mayor</th>
              <th scope="col" >Largo</th>
              <th scope="col" >Dim. Menor</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td>{data.slots || '-'}</td>
              <td>{data.majorDim || '-'}</td>
              <td>{data.large || '-'}</td>
              <td>{data.minorDim || '-'}</td>
            </tr>
          </tbody>     
          <thead className="text-center  z-0">
            <tr className='table-secondary text-white'>
              <th colSpan='4' className='bg-secondary bg-opacity-75 text-white  text-start'>Trabajo</th>
            </tr>
            <tr>
              <th scope="col" >Paso</th>
              <th colSpan='2' scope="col" > Vueltas</th>
              <th scope="col" >Alambre</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td>{data.workSteps || '-'}</td>
              <td colSpan='2'>{data.workLaps || '-'}</td>
              <td>{data.workWire || '-'}</td>
            </tr>
          </tbody>     
          <thead className="text-center  z-0">
            <tr className='table-secondary text-white'>
              <th className='bg-secondary bg-opacity-75 text-white  text-start' colSpan='4'>Arranque</th>
            </tr>
            <tr>
              <th scope="col" >Paso</th>
              <th colSpan='2' scope="col" > Vueltas</th>
              <th scope="col" >Alambre</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td>{data.startSteps || '-'}</td>
              <td colSpan='2'>{data.startLaps || '-'}</td>
              <td>{data.startWire || '-'}</td>
            </tr>
          </tbody>     
          <thead className="text-center  z-0">
            <tr className='table-secondary text-white'>
              <th className='bg-secondary bg-opacity-75 text-white  text-start' colSpan='4'>Información adicional</th>
            </tr>
            <tr>
              <th scope="col" >Voltaje</th>
              <th colSpan='2' scope="col" > Conexión</th>
              <th scope="col" >Tipo de bobinado</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td>{data.voltage || '-'}</td>
              <td colSpan='2'>{data.connection || '-'}</td>
              <td>{data.windingType || '-'}</td>
            </tr>
          </tbody>
          <thead className="text-tart  z-0">
            <tr>
              <th className="bg-secondary bg-opacity-75 text-white" colSpan='4' scope="col" >Observaciones</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td colSpan='4'>{data.observations || '-'}</td>
            </tr>
          </tbody>       
        </table>
      </div>
    </div>
  );
}

export default MonophasicPreviewView;