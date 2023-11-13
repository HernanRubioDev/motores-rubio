const TriphasicPreviewView = ({data})=>{

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
              <td>{data.brand || '-'}</td>
              <td >{data.model || '-'}</td>
              <td>{data.owner || '-'}</td>
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
              <td>{data.hp || '-'}</td>
              <td  >{data.rpm || '-'}</td>
              <td >{data.large || '-'}</td>
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
              <td>{data.slots || '-'}</td>
              <td >{data.major_dim || '-'}</td>
              <td>{data.minor_dim || '-'}</td>
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
              <td>{data.steps || '-'}</td>
              <td >{data.laps || '-'}</td>
              <td>{data.wire || '-'}</td>
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
              <td>{data.voltage || '-'}</td>
              <td >{data.connection || '-'}</td>
              <td>{data.winding_type || '-'}</td>
            </tr>
          </tbody>
          <thead className="text-center  z-0">
            <tr>
              <th colSpan='3' scope="col" >Observaciones</th>
            </tr>
          </thead >
          <tbody className="text-center">
            <tr>
              <td colSpan='3'>{data.observations || '-'}</td>
            </tr>
          </tbody>       
        </table>
      </div>
    </div>
  );
}

export default TriphasicPreviewView;