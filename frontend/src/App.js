import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import V_60 from './Components/v60/v60';
import S90 from './Components/s90/s90';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import TestDrive from './Components/Testdrive/TestDrive';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Contact/>}/>
          <Route path='/s90' element={<S90/>}/>
          <Route path='/xc60' element={<V_60/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/test_drive' element={<TestDrive/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
