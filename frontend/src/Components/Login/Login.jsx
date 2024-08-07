import '../Login/Login.css'
import {Link} from 'react-router-dom'
import {ArrowCircleRightSharp, Visibility, VisibilityOff} from '@mui/icons-material'
import { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import userContext from '../../Context/userContext'
 

function Login(){
    const navigate=useNavigate();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [type,setType] = useState('password')
    const [passIcon,setPassIcon] = useState(<Visibility/>)
    const [showPass,setShowPass] = useState('false')
    const {setLoggedIn,setUser} = useContext(userContext)

    const handleLogin=(event)=>{
        event.preventDefault(); 
        axios.post('http://localhost:3001/login',[email,password])
        .then(res=>{
            console.log(res)
            if(res.data[0]==='Success'){
                setLoggedIn(true)
                setUser(res.data[1])
                navigate('/profile')
            }
            else{
                console.log(res)
                alert("Incorrect Username or password...")
                window.location.reload(true)
            }
        })
        .catch(err=>console.log(err))

    }


    const toggleEye=()=>{
        if(showPass==='false'){
            setPassIcon(<VisibilityOff />) 
            setType('text')
            setShowPass('true')
        }    
        else{
            setPassIcon(<Visibility/>) 
            setType('password')
            setShowPass('false')
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

                    <input type="email" 
                    placeholder="Email" 
                    onChange={e=>(setEmail(e.target.value))} 
                    required/>


                    <input type={type}
                    placeholder="Password" 
                    onChange={e=>(setPassword(e.target.value))} 
                    required/>
                    <span className='eye-icon' onClick={toggleEye}>{passIcon}</span>


                    <button>Log in</button>


                    <Link to='/register' id='register_navigation'>Don't have an account ?</Link>

                </form>

            </div>

        </div>

    </div>
    )
}

export default Login