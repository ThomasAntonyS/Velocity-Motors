import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import V_60 from './Components/v60/v60';
import S90 from './Components/s90/s90';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import TestDrive from './Components/Testdrive/TestDrive';
import G63 from './Components/g63/g63';
import Booking from './Components/Booking/Booking';
import Accessories from './Components/Accessories/Accessories';
import Feedback from './Components/Feedback/Feedback';
import UserContextProvider from './Context/UserContextProvider';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <UserContextProvider>

        <Routes>

          <Route 
                path='/' 
                element={<Home/>}
            />

          <Route 
                path='/' 
                element={<Contact/>}
            />

          <Route 
                path='/amg63' 
                element={<G63/>}
            />

          <Route 
                path='/s90' 
                element={<S90/>}
            />

          <Route 
                path='/xc60' 
                element={<V_60/>}
            />

          <Route 
                path='/login' 
                element={<Login/>}
            />

          <Route 
                path='/register' 
                element={<Register/>}
            />

          <Route 
                path='/test_drive' 
                element={<TestDrive/>}
            />

          <Route 
                path='/book_now' 
                element={<Booking/>}
            />

          <Route 
                path='/accessories' 
                element={<Accessories/>} 
            />

          <Route 
                path='/feedback' 
                element={<Feedback/>} 
            />

          <Route 
                path='/profile' 
                element={<Profile/>} 
            />
          
        </Routes>

      </UserContextProvider>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
