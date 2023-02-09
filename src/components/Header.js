import React from 'react';
import { Link } from 'react-router-dom';
import { useApi } from '../hooks/useApi';


const Header = ()=>{
  const {logoutUser} = useApi();
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div>
          <img src='images/Logo.png' className='me-1'/>
          <a className="navbar-brand fw-semibold fs-4" href="/">Motores-Rubio</a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Cuenta</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            {localStorage.token ?
            <ul className="navbar-nav  justify-content-start align-items-center flex-grow-1 pe-3" >
              <li className='nav-item'><Link className='nav-link d-none d-lg-block fs-5' to='/search'>Buscar</Link></li>
              <li className="nav-item dropdown d-none d-lg-block fs-5">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nuevo
                </a>
                <ul className="dropdown-menu">
                  <li><Link className='dropdown-item fs-5' to='/new/monophasic'>Monofásico</Link></li>
                  <li><Link className='dropdown-item fs-5' to='/new/triphasic'>Trifásico</Link></li>
                  <li><Link className='dropdown-item fs-5' to='/new/washer'>Lavarropas Automático</Link></li>
                </ul>
              </li>
            </ul>
            :
            ''
          }
            <ul className="navbar-nav d-flex justify-content-between align-items-center justify-content-lg-end flex-grow-1 pe-3 h-100">
              {localStorage.token ? 
              <>
                <li className="nav-item dropstart d-none d-lg-block fs-5">
                  <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cuenta
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item">Configuracion</a></li>
                    <li><a className="dropdown-item">Ayuda</a></li>
                    <Link to='/' type="button" className="btn btn-link text-decoration-none text-black">Información</Link>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button onClick={()=>logoutUser()} type="button" className="btn btn-link text-decoration-none fw-semibold text-secondary">Salir</button></li>
                  </ul>
                </li>
                <div className='container-fluid d-lg-none d-flex flex-column align-items-center border-top'>
                  <li><Link to='/search' className="btn btn-link text-decoration-none fw-semibold text-secondary d-lg-none">Buscar</Link></li>
                  <a className="nav-link dropdown-toggle fw-semibold text-secondary" role="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                    Nuevo Motor
                  </a>
                  <div className="collapse" id="collapseExample2">
                  <div className="card card-body container-fluid">
                    <li><Link className='dropdown-item m-1 text-secondary' to='/new/monophasic'>Monofásico</Link></li>
                    <li><Link className='dropdown-item m-1 text-secondary' to='/new/triphasic'>Trifásico</Link></li>
                    <li><Link className='dropdown-item m-1 text-secondary' to='/new/washer'>Lavarropas Automático</Link></li>
                  </div>
                </div>
              </div>
              <div className='container-fluid d-lg-none d-flex flex-column align-items-center border-top'>
                <li><button type="button" className="btn btn-link text-decoration-none fw-semibold text-secondary d-lg-none">Configuracion</button></li>
                <li><button type="button" className="btn btn-link text-decoration-none fw-semibold text-secondary d-lg-none">Ayuda</button></li>
                <li><button onClick={()=>logoutUser()} type="button" className="btn btn-link text-decoration-none fw-semibold text-danger d-lg-none">Salir</button></li>
              </div>
              </>
                
              :
              <div className='d-flex flex-column-reverse flex-lg-row'>
                <Link to='/' type="button" className="btn btn-link text-decoration-none  text-black fs-5">Información</Link>
                <Link to='/login' type="button" className="btn btn-link text-decoration-none fw-semibold text-primary fs-5">Ingresar</Link>
              </div>
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;