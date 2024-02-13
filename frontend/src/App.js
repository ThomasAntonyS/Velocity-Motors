import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import V_60 from './Components/v60/v60';
import S90 from './Components/s90/s90';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/s90' element={<S90/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/v60' element={<V_60/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
