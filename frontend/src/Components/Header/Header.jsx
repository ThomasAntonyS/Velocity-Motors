import Logo from '../Assets/logo.png';
import MenuItems from '../Menubar/MenuBar';
import './header.css'

function Header (){

    return(
        <div className='header'>
            <div className='Logo_'>
                <a href="/"><img src={Logo} alt='Logo' height={100} width={120}/> <p><b>VELOCITY MOTORS</b></p></a>
            </div>
            <div className="Menu_Icon">
                <MenuItems/>
            </div>
            
        </div>
    )
}
export default Header;