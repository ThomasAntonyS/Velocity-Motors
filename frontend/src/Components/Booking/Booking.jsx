import { useState } from 'react'
import Header from '../Header/Header'
import axios from 'axios'
import '../Booking/booking.css'
import Popup from '../Popup/Popup'

export default function Booking(){


    const [firstName,setFirstName] = useState('') 
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [model,setModel] = useState('')
    const [street,setStreet] = useState('')
    const [city,setCity] = useState('')
    const [state,setState] = useState('')
    const [pincode,setPincode] = useState('')
    const [popup,setPopup] = useState('')



    const generateBookingId = () =>{
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let counter = 0;
        while (counter < 7) {
            result += characters.charAt(Math.floor(Math.random() * 62));
            counter += 1;
        }
        return ("VM_"+result)
    }


    const handleBook = (event) =>{
        event.preventDefault()
        var bookingId = generateBookingId()
        const values = [firstName,lastName,email,phone,model,street,city,state,pincode,bookingId]
        axios.post('http://localhost:3001/book_now',values)
        .then(res=>{
            if(res.data==='Success')
                setPopup("Booking Successful. We'll contact you shortly")
        })
        .catch(err => console.log(err))
    }


    
    return(
        <div className="booking_">

            <Header/>

            <Popup message={popup} 
            status={ (popup.message=="Booking Successful. We'll contact you shortly") ? 'Success' : 'Fail' } />


            <div className="booking_Content">
                
                <center>
                    <p id='book_heading'>Book Your Car.</p>
                    <p id='book_content'>Discover Seamless car booking with us! Choose from a diverse
                                        fleet, including eco-friendly, SUVs, and luxury cars.Our user friendly
                                        platform ensures a hassie-free experience, with transparent pricing and 
                                        flexible options.Book now and embark your journey with confidence.</p>
                </center>


                <form onSubmit={handleBook}>

                    <center>


                        <input type="text"
                        placeholder='First Name' 
                        id='Fn' 
                        onChange={e=>{setFirstName(e.target.value)}} 
                        required />


                        <input type="text" 
                        placeholder='Last Name' 
                        id='Ln'
                        required 
                        onChange={e=>{setLastName(e.target.value)}} />


                        <input type="email" 
                        placeholder='Email Id' 
                        minLength={13} id='Email' 
                        required 
                        onChange={e=>{setEmail(e.target.value)}} />

                    
                        <input type="text" 
                        placeholder='Phone Number' 
                        minLength={10} 
                        maxLength={10} 
                        id='Ph' 
                        required 
                        onChange={e=>{setPhone(e.target.value)}}/>



                        <select id='Se' onChange={e=>{setModel(e.target.value)}} required>

                            <option value="" selected disabled>Choose a model</option>
                            <option value="Volvo XC60">Volvo XC60</option>
                            <option value="Volvo S90">Volvo S90</option>
                            <option value="Mercedes AMG G63">Mercedes AMG G63</option>

                        </select>


                        <input type="text" 
                        placeholder='Street' 
                        id='St' 
                        required 
                        onChange={e=>{setStreet(e.target.value)}} />
                    

                        <input type="text" 
                        placeholder='City' 
                        id='Ct' 
                        required 
                        onChange={e=>{setCity(e.target.value)}} />


                        <input type="text" 
                        placeholder='State' 
                        id='Sa' 
                        required 
                        onChange={e=>{setState(e.target.value)}} />


                        <input type="text" 
                        placeholder='Pincode' 
                        minLength={6} 
                        maxLength={7} 
                        id='Pc' 
                        required 
                        onChange={e=>{setPincode(e.target.value)}}/>
                    

                    <br />

                        <button id='Book_Button'>Book Now</button>

                    </center>

                </form>

            </div>

        </div>
    )
}