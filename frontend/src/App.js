import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import V_60 from './Components/v60/v60';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/v60' element={<V_60/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
