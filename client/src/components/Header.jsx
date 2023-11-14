import { NavLink, Link } from "react-router-dom";
import useUser from "../hooks/useUser";

const Header = ()=>{
  const {logOutUser} = useUser()
  return(
    <header className="d-flex col-12 align-self-start">
      <nav className="navbar navbar-expand-lg bg-body-tertiary col-12">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <NavLink to={'/search'} className='navbar-brand d-flex align-items-center'>
              <img src="/icons/gear.svg"/>
              <h6 className="m-0 ms-2 d-lg-block text-secondary">Motores-Rubio</h6>
            </NavLink>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header border-bottom border-body-secondary">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Motores-Rubio</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-flex flex-lg-row flex-column p-0">
              <ul className="navbar-nav flex-lg-row flex-column justify-content-between flex-grow-1">
                <div className="d-flex flex-column flex-lg-row">
                  {localStorage.getItem('auth_token') &&
                  <>
                  <li className="nav-item align-self-center">
                    <NavLink to={'/search'} className="nav-link fw-medium text-body-secondary" aria-current="page">Buscar</NavLink>
                  </li>
                  <li className="nav-item dropdown align-self-center">
                    <a className="nav-link dropdown-toggle text-center fw-medium text-body-secondary" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Nuevo
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to={'/monophasic'} className="dropdown-item fw-medium text-body-secondary">Monofásico</Link>
                      </li>
                      <li>
                        <Link to={'/triphasic'} className="dropdown-item fw-medium text-body-secondary">Trifásico</Link>
                      </li>
                      <li>
                        <Link to={'/washer'} className="dropdown-item fw-medium text-body-secondary">Lavarropas</Link>
                      </li>
                    </ul>
                  </li>   
                  </> 
                    }
                </div>
                <div className="d-flex flex-column flex-lg-row align-items-center">
                  {localStorage.getItem('auth_token') ? 
                  <>
                  <li className="nav-item">
                    <button onClick={()=> logOutUser()} className="nav-link fw-medium text-body-secondary">Salir</button>
                  </li>
                  </>
                  :
                  <>
                  <li className="nav-item">
                    <NavLink to={'/'} className='nav-link fw-medium text-body-secondary'>Ingresar</NavLink>
                  </li>
                  </>
                  }
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;