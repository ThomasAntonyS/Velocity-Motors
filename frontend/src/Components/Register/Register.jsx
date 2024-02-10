import './Register.css'
import {Link} from 'react-router-dom'
import {ArrowCircleRightSharp} from '@mui/icons-material'

function Register(){
    return(
        <div className="register">
            <Link to='/' id='back_to_home'><span>Back to Home</span><ArrowCircleRightSharp/></Link>
            <div className="register_content">
            <div className="left"></div>
                <div className="right">
                    <h2>Hello User, <span>Join Us !</span></h2>
                    <p>Lets Sign Up.</p>
         
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Password"  />
                        <input type="password" placeholder="Confirm Password" />
                        <button >Sign Up</button>
                        <Link to='/login' id='register_navigation'>Already have an account ?</Link>
                    </form>
                 </div>
            </div>
        </div>
    )
}


export default Register