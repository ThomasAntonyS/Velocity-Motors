import { Close, Verified, NewReleases } from '@mui/icons-material'
import './popup.css'


export default function Popup(props){


    return(

        (props.message) ? 
        <div className="popup" id='popup'>
            
            <button id='popup_close' onClick={()=>{
                const popUp = document.getElementById('popup')
                popUp.style.display='none'
            }}>
            <Close/>
            </button>

            <p id='popup_icon'>
                {
                    (props.status=='Success') ? 
                    <Verified sx={{fontSize:'3rem'}}/> 
                    : 
                    <NewReleases sx={{fontSize:'3rem'}}/>
                }   
            </p>

            <p id='pop_msg'>We've got something for you</p>

            <p id='alert_msg'>
                {

                    props.message

                }
            </p>

            <center>
                <button id='popup_close_done' onClick={()=>{
                    const popUp = document.getElementById('popup')
                    popUp.style.display='none'
                    window.location.reload(true)
                }}>
                Done
                </button>
            </center>

        </div>

        :

        null

    )

}