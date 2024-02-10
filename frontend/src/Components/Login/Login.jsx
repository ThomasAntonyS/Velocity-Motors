import './Login.css'
import {Link} from 'react-router-dom'

function Login(){
    return(
        <div className="login">
            <div className="login_content">
            <div className="left"></div>
                <div className="right">
                    <h2>We Are <span>Velocity Motors</span></h2>
                    <p>Welcome back! Log in to your account.</p>
         
                    <form>
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password"  />
                        <button >Log in</button>
                        <Link to='/xc60'>Hi</Link>
                    </form>
                 </div>
        </div>
        </div>
    )
}

export default Login