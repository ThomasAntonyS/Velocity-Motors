import './Register.css'
import {Link} from 'react-router-dom'
import {ArrowCircleRightSharp} from '@mui/icons-material'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Register(){

    const navigate = useNavigate()
    const [username,SetUsername] = useState('')
    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault();
        try {  
            const status = axios.post('http://localhost:3001/register',[username,email,password])
            console.log(status)
            if(status)
            navigate('/login')
            else
            alert('Registration Unsucessfull')
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="register">
            <Link to='/' id='back_to_home'><span>Back to Home</span><ArrowCircleRightSharp/></Link>

            <div className="register_content">

            <div className="left"></div>
            
                <div className="right">
                    <h2>Hello User, <span>Join Us !</span></h2>
                    <p>Lets Sign Up.</p>
         
                    <form onSubmit={handleSubmit}>

                        <input type="text" placeholder="Name" onChange={e=>SetUsername(e.target.value)} required />

                        <input type="email" placeholder="Email" onChange={e=>SetEmail(e.target.value)} required/>

                        <input type="password" placeholder="Password"  id='first_passowrd' required/>

                        <input type="password" placeholder="Confirm Password" id='second_passowrd' onChange={e=>SetPassword(e.target.value)} required/>

                        <button >Sign Up</button>

                        <Link to='/login' id='register_navigation'>Already have an account ?</Link>

                    </form>
                 </div>
            </div>
        </div>
    )
}


export default Register