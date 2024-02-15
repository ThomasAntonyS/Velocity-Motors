import './contact.css'

export default function Contact(){

    return(
        <div className="contact_">
            <div className="left">
                <p>Contact Us</p>
                <div className="underline"></div>
                <input type="text" id='contactName' placeholder='Name'/>
                <input type="email" id='contactEmail' placeholder='Email'/>
                <textarea cols="20" rows="5" id='contactMessage' placeholder='Message'></textarea>
                <button>Notify Us</button>
            </div>

            <div className="center"></div>

            <div className="right">

            </div>
        </div>
    )
    
}

