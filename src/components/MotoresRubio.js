import '../stylesheets/MotoresRubio.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./Header";
import Login from './Login';
import Register from './Register';
import Monophasic from './Monophasic';
import Triphasic from './Triphasic';
import Washer from './Washer';
import Search from './Search';
import PrivateRoute from './PrivateRoute';
const MotoresRubio = ()=>{
  return(
    <main className="motores-rubio d-flex flex-column">
      <Router>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/new/monophasic' element={<PrivateRoute path='/login'><Monophasic /></PrivateRoute>}/>
          <Route path='/new/triphasic' element={<Triphasic />}/>
          <Route path='/new/washer' element={<Washer />}/>
          <Route path='/search' element={<Search />}/>
        </Routes>
      </Router>
    </main>
  );
}

export default MotoresRubio;