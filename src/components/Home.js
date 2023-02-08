import React from 'react';
import { Link } from 'react-router-dom';

const Home = ()=>{
  return(
    <section className='bg-img d-flex container-fluid justify-content-center align-items-center h-100 w-100 bg-body-secondary'>
      <div className='d-flex flex-column justify-content-evenly col-lg-8 bg-white border border-secondary p-2 h-50'>
        <h3 className='fs-2 fw-bold text-center text-secondary'>¿Qué es Motores-Rubio?</h3>
        <p className='fs-4'>Motores-Rubio es una aplicación REST que permite a los usuarios administrar los datos de sus motores eléctricos. 
          Con esta aplicación, los usuarios pueden registrar información detallada sobre sus motores, incluyendo su marca, modelo, tipo de motor, voltaje, corriente, etc. 
          Además, los usuarios pueden agregar notas y etiquetas para organizar y clasificar sus motores.</p>
        <p className='fs-4'>Además, Motores-Rubio es una aplicación basada en REST, lo que significa que permite a los usuarios acceder a sus datos de motores desde cualquier lugar y en cualquier momento, simplemente conectándose a Internet. 
        Esto les da a los usuarios la flexibilidad y la libertad de administrar sus motores desde su computadora de escritorio, tablet o teléfono móvil.</p>

        <p className='fs-5 text-end me-2'>¡<Link className='text-primary text-decoration-none fw-bold' to='/register'>Crea tu cuenta</Link> y pruebala!</p>        
      </div>
    </section>
  );
}

export default Home;