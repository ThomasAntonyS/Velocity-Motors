import {Link} from 'react-router-dom'
import { Copyright } from '@mui/icons-material'
import './footer.css'

function Footer(){
    return(
        <center>

            <div className="footer">

                <div className="quick_links">

                    <p id='footer_heading'>Quick Links</p>

                    <Link id='footerLinks' onClick={()=>window.scrollTo(0,0)} to={'/'}>Home</Link>
                    <Link id='footerLinks' onClick={()=>window.scrollTo(0,0)} to={'/test_drive'}>Test Drive</Link>
                    <Link id='footerLinks' onClick={()=>window.scrollTo(0,0)} to={'/book_now'}>Book Now</Link>
                    <Link id='footerLinks' onClick={()=>window.scrollTo(0,0)} to={'/accessories'}>Accessories</Link>
                    <Link id='footerLinks' to={'/'}>Contact Us</Link>

                </div>

                <div className="footer_models">

                    <p id='footer_modelHeading'>Models</p>

                    <Link id='footerLinks' onClick={()=>window.scrollTo(0,0)} to={'/xc60'}>Volvo XC60</Link>
                    <Link id='footerLinks' onClick={()=>window.scrollTo(0,0)} to={'/amg63'}>Mercedes AMG G63</Link>
                    <Link id='footerLinks' onClick={()=>window.scrollTo(0,0)} to={'/s90'}>Volvo S90</Link>

                </div> 

                <p id='copyright'><Copyright sx={{fontSize:'1rem',margin:'0px 5px'}}/>Velocity Motors , All rights reserved 2024</p>

            </div>

        </center>
    )
}

export default Footer