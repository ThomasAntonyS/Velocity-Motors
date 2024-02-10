import './Login.css'
import {Link} from 'react-router-dom'
import {ArrowCircleRightSharp} from '@mui/icons-material'

function Login(){
    return(
        <div className="login">
            <Link to='/' id='back_to_home'><span>Back to Home</span><ArrowCircleRightSharp/></Link>
            <div className="login_content">
            <div className="left"></div>
                <div className="right">
                    <h2>We Are <span>Velocity Motors</span></h2>
                    <p>Welcome back! Log in to your account.</p>
         
                    <form>
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password"  />
                        <button >Log in</button>
                        <Link to='/register' id='register_navigation'>Don't have an account ?</Link>
                    </form>
                 </div>
        </div>
        </div>
    )
}

export default Login