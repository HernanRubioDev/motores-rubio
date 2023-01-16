const Search = ()=>{
  return(
    <section className="d-flex p-3 container-fluid justify-content-center align-items-center h-100 w-100 bg-body-secondary">
      <div className="w-75 h-100 border border-secondary bg-white d-flex flex-column align-items-center justify-content-between box-shadow">
        <form className=" w-100 h-75 d-flex align-items-center justify-content-evenly flex-wrap overflow-hidden px-3">
          <div className="d-flex h-50 w-75 border border-secondary border-end-0 flex-wrap align-items-center justify-content-evenly">
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control border-secondary"placeholder="Marca"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control border-secondary"placeholder="Rpm"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control border-secondary"placeholder="Dim. Mayor"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control border-secondary"placeholder="Modelo"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control border-secondary"placeholder="Hp"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control border-secondary"placeholder="Dim. Menor"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control border-secondary"placeholder="Dueño"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control border-secondary"placeholder="Ranura"/>
              </div>
              <div className="d-flex align-items-center m-2 w-25">
                <input type="text" className="form-control border-secondary"placeholder="Largo"/>
              </div>
          </div>
          <div className="border border-secondary h-50 w-25 d-flex flex-column align-items-center justify-content-evenly">
              <div className="d-flex align-items-center m-3 w-75">
                <select className="form-select border-secondary" id="inputGroupSelect01">
                  <option >Tipo de Motor</option>
                  <option value="1">Monofásico</option>
                  <option value="2">Trifásico</option>
                  <option value="3">Lavarropas Automático</option>
                </select>
              </div>
              <div className="d-flex align-items-center m-3 w-75">
                <select className="form-select border-secondary" id="inputGroupSelect02">
                  <option >Tipo de Arranque</option>
                  <option value="1">Plaqueta</option>
                  <option value="2">Condensador</option>
                </select>
              </div>
          </div>
          <div className="w-100 d-flex align-items-center justify-content-evenly">
          <button type="button" className="btn btn-primary w-25">Buscar Motor</button>
          <button type="button" className="btn btn-primary w-25">Ver Todos</button>
          <button type="button" className="btn btn-primary w-25">Nueva Busqueda</button>
          </div>
        </form>
        <table className="table table-secondary table-striped table table-bordered">
          <thead>
            <tr>
              <th scope="col">Motores</th>
              <th scope="col">Marca</th>
              <th scope="col">Dim.Mayor</th>
              <th scope="col">Min. Menor</th>
              <th scope="col">Largo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Genalex</td>
              <td>165</td>
              <td>95</td>
              <td>50</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Genalex</td>
              <td>165</td>
              <td>95</td>
              <td>50</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Genalex</td>
              <td>165</td>
              <td>95</td>
              <td>50</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Genalex</td>
              <td>165</td>
              <td>95</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Search;