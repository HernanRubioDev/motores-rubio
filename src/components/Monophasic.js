import '../stylesheets/Monophasic.css';

const Monophasic = ()=>{
  return(
    <section className="d-flex container-fluid justify-content-center align-items-center h-100 w-100 bg-body-secondary">
      <div className="w-75 h-75 border bg-white d-flex flex-column">
      <nav className="w-100 d-flex flex-nowrap flex-row justify-content-evenly list-group">
      <ul className="nav nav-pills w-100">  
        <li className="nav-item border flex-fill">
          <a className="nav-link text-center " href="#mono-left">Primero</a>
        </li>
        <li className="nav-item border flex-fill">
          <a className="nav-link text-center" href="#mono-center">Segundo</a>
        </li>
        <li className="nav-item border flex-fill">
          <a className="nav-link text-center" href="#mono-right">Tercero</a>
        </li>
      </ul>
      </nav>
      <form className="w-100 h-100 d-flex flex-nowrap overflow-hidden" >
        <div id="mono-left" className="login-form__div w-100 h-100 d-flex flex-column justify-content-evenly align-items-center align-content-center">
          <div className='col-11 d-flex flex-column flex-wrap h-50 border align-content-around '>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control"placeholder="Marca"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control"placeholder="Rpm"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control"placeholder="Dim. Mayor"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control"placeholder="Modelo"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control"placeholder="Hp"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control"placeholder="Dim. Menor"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control"placeholder="Dueño"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control"placeholder="Ranura"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control"placeholder="Largo"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <select className="form-select" id="inputGroupSelect01">
                  <option >Tipo de arranque</option>
                  <option value="1">Plaqueta</option>
                  <option value="2">Condesador</option>
                </select>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control"placeholder="Capacidad μF"/>
              </div>
          </div>
        </div>
        <div id="mono-center" className="login-form__div w-100 h-100 d-flex justify-content-evenly align-items-center">
          <div className=' col-11 d-flex flex-column border w-25 position-relative p-2'>
            <p className="mono-lable fw-semibold position-absolute start-50 bg-white translate-middle">Trabajo</p>
            <div className="d-flex align-items-center m-2">
              <input type="text" className="form-control"placeholder="Paso"/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input type="text" className="form-control"placeholder="Arranque"/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input type="text" className="form-control"placeholder="Alambre"/>
            </div>
          </div>
          <div className=' col-11 d-flex flex-column border w-25 position-relative p-2'>
            <p className="mono-lable fw-semibold position-absolute start-50 bg-white translate-middle">Arranque</p>
            <div className="d-flex align-items-center m-2">
              <input type="text" className="form-control"placeholder="Paso"/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input type="text" className="form-control"placeholder="Arranque"/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input type="text" className="form-control"placeholder="Alambre"/>
            </div>
          </div>
          <div className=' col-11 d-flex flex-column border w-25 p-2'>
            <div className="d-flex align-items-center m-2">
              <input type="text" className="form-control"placeholder="Paso"/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input type="text" className="form-control"placeholder="Arranque"/>
            </div>
            <div className="d-flex align-items-center m-2">
              <input type="text" className="form-control"placeholder="Alambre"/>
            </div>
          </div>
        </div>
        <div id="mono-right" className="login-form__div w-100 h-100 d-flex justify-content-center align-items-center">
          <div className="form-floating w-75 h-75">
            <textarea className="form-control h-100" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">Observaciones</label>
          </div>
        </div>
      </form>
      </div>
    </section>
  );
}

export default Monophasic;