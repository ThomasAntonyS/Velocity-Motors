import Logo from '../Assets/logo.png';
import MenuItems from '../Menubar/MenuBar';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../Header/header.css'

function Header (){

    return(

        <div className='header'>

            <div className='Logo_'>

                <a href="/"><img src={Logo} alt='Logo' height={70} width={90}/> <p><b>VELOCITY MOTORS</b></p></a>

            </div>

            <div id='profile'>
                <Link to='/profile'><AccountCircleIcon
                  style={{
                    color:'rgba(255, 255, 255, 0.7)',
                    background:'rgba(0, 0, 0, 0.5)',
                    fontSize:'2.3rem',
                    position:'absolute',
                    top:'50%',
                    left:'87%',
                    translate:'-50% -50%',
                    borderRadius:'30px',
                    }} 
                />
                </Link>
            </div>
            
            <div className="Menu_Icon">
                <MenuItems/>
            </div>
            
        </div>
    )
}
export default Header;