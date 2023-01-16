import '../stylesheets/MotoresRubio.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./Header";
import Login from './Login';
import Register from './Register';
import Monophasic from './Monophasic';

const MotoresRubio = ()=>{
  return(
    <main className="motores-rubio d-flex flex-column">
      <Router>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/new/monophasic' element={<Monophasic />}/>
        </Routes>
      </Router>
    </main>
  );
}

export default MotoresRubio;