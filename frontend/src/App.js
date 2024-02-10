import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Xc60 from './Components/XC_60/xc60';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/xc60' element={<Xc60/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
