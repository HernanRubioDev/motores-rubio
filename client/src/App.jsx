import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';
import Monophasic from './pages/Monophasic';
import Triphasic from './pages/Triphasic';
import Washer from './pages/Washer';
import ErrorPage from './pages/ErrorPage';
import { SessionProvider } from './context/UserContext';
import { helpHttp } from './helpers/helpHttp';

const api = helpHttp();

function App() {
  return (
    <SessionProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/search' element={<Search />}/>
          <Route path='/monophasic' element={<Monophasic />}/>
          <Route path='/triphasic' element={<Triphasic />}/>
          <Route path='/washer' element={<Washer />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </Router>
    </SessionProvider>
  )
}

export default App
