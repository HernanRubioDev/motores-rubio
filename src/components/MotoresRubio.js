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
import Home from './Home';
const MotoresRubio = ()=>{
  return(
    <main className="motores-rubio d-flex flex-column">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/new/monophasic' element={<PrivateRoute path='/login'><Monophasic /></PrivateRoute>}/>
          <Route path='/new/triphasic' element={<PrivateRoute path='/login'><Triphasic /></PrivateRoute>}/>
          <Route path='/new/washer' element={<PrivateRoute path='/login'><Washer /></PrivateRoute>}/>
          <Route path='/search' element={<PrivateRoute path='/login'><Search /></PrivateRoute>}/>
        </Routes>
      </Router>
    </main>
  );
}

export default MotoresRubio;