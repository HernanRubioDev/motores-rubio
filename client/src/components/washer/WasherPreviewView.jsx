
const WasherPreviewView = ({data})=>{

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
              <td>{data.brand || '-'}</td>
              <td colSpan='2'>{data.model || '-'}</td>
              <td>{data.owner || '-'}</td>
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
              <td>{data.hp || '-'}</td>
              <td colSpan='2'>{data.rpm || '-'}</td>
              <td>{data.large || '-'}</td>
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
              <td>{data.slots || '-'}</td>
              <td colSpan='2'>{data.major_dim || '-'}</td>
              <td>{data.minor_dim || '-'}</td>
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
              <td>{data.spin_work_steps || '-'}</td>
              <td colSpan='2'>{data.spin_work_laps || '-'}</td>
              <td>{data.spin_work_wire || '-'}</td>
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
              <td>{data.spin_start_steps || '-'}</td>
              <td colSpan='2'>{data.spin_start_laps || '-'}</td>
              <td>{data.spin_start_wire || '-'}</td>
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
              <td>{data.first_wash_work_steps || '-'}</td>
              <td colSpan='2'>{data.first_wash_work_laps || '-'}</td>
              <td>{data.first_wash_work_wire || '-'}</td>
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
              <td>{data.second_wash_work_steps || '-'}</td>
              <td colSpan='2'>{data.second_wash_work_laps || '-'}</td>
              <td>{data.second_wash_work_wire || '-'}</td>
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
              <td>{data.wash_start_steps || '-'}</td>
              <td colSpan='2'>{data.wash_start_laps || '-'}</td>
              <td>{data.wash_start_wire || '-'}</td>
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
              <td>{data.voltage || '-'}</td>
              <td>{data.connection || '-'}</td>
              <td>{data.winding_type || '-'}</td>
              <td>{data.capacity || '-'}</td>
            </tr>
          </tbody>
          <thead className="text-center  z-0">
            <tr>
              <th colSpan='4' scope="col" >Observaciones</th>
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

export default WasherPreviewView;