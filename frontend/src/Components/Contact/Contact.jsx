import { Link } from 'react-router-dom'
import {Twitter,YouTube,Facebook,Instagram, Copyright} from '@mui/icons-material'
import '../Contact/contact.css'

export default function Contact(){

    const social=[
        <Twitter sx={{fontSize:'2rem'}} />,
        <YouTube sx={{fontSize:'2rem'}} />,
        <Facebook sx={{fontSize:'2rem'}} />,
        <Instagram sx={{fontSize:'2rem'}} />
    ]


    
    return(
        <div className="contact_">

            <div className="left">

                <p>Contact Us</p>
                <div className="underline"></div>


                    <input type="text" 
                    id='contactName' 
                    placeholder='Name' />


                    <input type="email" 
                    id='contactEmail' 
                    placeholder='Email' />
                    

                    <textarea 
                    cols="20" rows="5" 
                    id='contactMessage' 
                    placeholder='Message'></textarea>


                    <button>Notify Us</button>
                
            </div>



            <div className="center"></div>



            <div className="right"> 

                <p>To get our latest updates</p>
                <input type="text" placeholder='Email Here !!'/> <button>Subscribe</button>

                <br />

                <p id='Or_txt'>----------------------------</p>

                <br />

                {
                    social.map(social=>
                        <Link id='Social_links'>{social}</Link>
                    )
                }

                <p id='copyright'><Copyright sx={{fontSize:".8rem"}}/>Velocity Motors , All rights reserved 2024</p>

            </div>


        </div>
    )
    
}

