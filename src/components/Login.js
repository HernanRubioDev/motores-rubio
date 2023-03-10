import { Link } from "react-router-dom";

const Login = ()=>{
  return(
    <section className="d-flex container-fluid justify-content-center align-items-center h-100 w-100 bg-body-secondary">
      <form className="border container-fluid p-3 w-sm-100 col-sm-6 col-md-5 col-lg-4 col-xl-3 bg-white rounded-1">
        <legend className="text-center w-100 border-bottom pb-3">Ingresar</legend>
        <div className="mb-3 pt-3">
          <div className="d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
          </svg>
            <input type="email" className="form-control ms-2" id="userLogin" placeholder="Usuario"/>
          </div>
          <div id="userLogin" className="form-text text-danger text-end">Usuario incorecto</div>
        </div>
        <div className="mb-3">
          <div className="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
              <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
              <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
            <input type="password" className="form-control ms-2" id="passwordLogin" placeholder="Contraseña"/>
          </div>
          <div id="passwordLogin" className="form-text text-danger text-end">La contraseña es demaciado corta</div>
        </div>
        <div className="d-flex flex-column justify-content-evenly align-items-center">
        <button type="submit" className="btn btn-primary w-100">Ingresar</button>
        <div className="form-text text-secondary d-flex justify-content-center">¿Aún no tienes cuenta? <Link className="text-decoration-none text-primary" to='/register'>¡Registrate!</Link></div>
        </div>
      </form>
    </section>
  );
}

export default Login;