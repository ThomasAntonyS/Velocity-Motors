import './contact.css'

export default function Contact(){

    return(
        <div className="contact_">
            <div className="left">
                <p>Contact Us</p>
                <input type="text" id='contactName' placeholder='Name'/>
                <input type="email" id='contactEmail' placeholder='Email'/>
                <textarea cols="30" rows="10" id='contactMessage' placeholder='Message'></textarea>
            </div>

            <div className="right">

            </div>
        </div>
    )
    
}

