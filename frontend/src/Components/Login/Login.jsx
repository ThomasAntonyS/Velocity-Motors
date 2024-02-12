import './Login.css'
import {Link} from 'react-router-dom'
import {ArrowCircleRightSharp} from '@mui/icons-material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login(){

    const navigate=useNavigate();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleLogin=(event)=>{
        event.preventDefault();
        try {  
            axios.post('http://localhost:3001/login',[email,password])
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="login">
            <Link to='/' id='back_to_home'><span>Back to Home</span><ArrowCircleRightSharp/></Link>
            <div className="login_content">
            <div className="left"></div>
                <div className="right">
                    <h2>We Are <span>Velocity Motors</span></h2>
                    <p>Welcome back! Log in to your account.</p>
         
                    <form onSubmit={handleLogin}>
                        <input type="email" placeholder="Email" onChange={e=>(setEmail(e.target.value))}/>
                        <input type="password" placeholder="Password" onChange={e=>(setPassword(e.target.value))}/>
                        <button >Log in</button>
                        <Link to='/register' id='register_navigation'>Don't have an account ?</Link>
                    </form>
                 </div>
            </div>
        </div>
    )
}

export default Login