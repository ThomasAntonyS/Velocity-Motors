import '../Register/Register.css'
import {Link} from 'react-router-dom'
import {ArrowCircleRightSharp,Visibility, VisibilityOff} from '@mui/icons-material'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Register(){

    const navigate = useNavigate()
    const [username,SetUsername] = useState('')
    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('')
    const [cnfpassword,SetCnfPassword] = useState('')
    const [type,setType] = useState('password')
    const [typeCnf,setTypeCnf] = useState('password')
    const [passIcon,setPassIcon] = useState(<Visibility/>)
    const [passIconCnf,setPassIconCnf] = useState(<Visibility/>)
    const [showPass,setShowPass] = useState('false')
    const [showPassCnf,setShowPassCnf] = useState('false')



    const handleSubmit = (event) =>{
        event.preventDefault();
        if(password.match(cnfpassword)){
            try {  
                axios.post('http://localhost:3001/register',[username,email,password])
                .then(res=>{
                    if(res.data==="Success")
                        navigate('/login')

                    else if(res.data==="Email Already exist"){
                        alert('Email already exist...')
                        window.location.reload(true)
                    }
                    else{
                        alert('Registration Unsuccessfull')
                        window.location.reload(true)
                    }
                })
            } 
            catch (error) {
                console.log(error);
            }
                   
        }
        else{
            alert("Password Doesn't match")
            window.location.reload(true)
        }
        
    }

    const toggleEyePass=()=>{
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


    const toggleEyePassCnf=()=>{
        if(showPassCnf==='false'){
            setPassIconCnf(<VisibilityOff />) 
            setTypeCnf('text')
            setShowPassCnf('true')
        }    
        else{
            setPassIconCnf(<Visibility/>) 
            setTypeCnf('password')
            setShowPassCnf('false')
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


                        <input type="text" 
                        placeholder="Name" 
                        onChange={e=>SetUsername(e.target.value)} 
                        required />


                        <input type="email" 
                        placeholder="Email" 
                        onChange={e=>SetEmail(e.target.value)} 
                        required/>


                        <input type={type}
                        placeholder="Password" 
                        onChange={e=>SetPassword(e.target.value)} 
                        required/>
                        <span className='eye-icon1' onClick={toggleEyePass}>{passIcon}</span>


                        <input type={typeCnf} 
                        placeholder="Confirm Password" 
                        onChange={e=>SetCnfPassword(e.target.value)} 
                        required/>
                        <span className='eye-icon2' onClick={toggleEyePassCnf}>{passIconCnf}</span>


                        <button >Sign Up</button>


                        <Link to='/login' id='register_navigation'>Already have an account ?</Link>

                    </form>

                 </div>
 
            </div>

        </div>
        
    )
}


export default Register