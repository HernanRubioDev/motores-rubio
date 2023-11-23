const MonophasicPreviewView = ({data})=>{
  return(
    <div className="d-flex flex-column h-100 w-100 align-self-center px-lg-3 pt-1 overflow-y-auto">
       <div className="w-100 ">
        <table className="table table-responsive table-striped align-middle shadow">
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
              <td >{data.brand || '-'}</td>
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
              <td >{data.motor_start || 'plaqueta'}</td>
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
              <td>{data.major_dim || '-'}</td>
              <td>{data.large || '-'}</td>
              <td>{data.minor_dim || '-'}</td>
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
              <td>{data.work_steps || '-'}</td>
              <td colSpan='2'>{data.work_laps || '-'}</td>
              <td>{data.work_wire || '-'}</td>
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
              <td>{data.start_steps || '-'}</td>
              <td colSpan='2'>{data.start_laps || '-'}</td>
              <td>{data.start_wire || '-'}</td>
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
              <td>{data.winding_type || '-'}</td>
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