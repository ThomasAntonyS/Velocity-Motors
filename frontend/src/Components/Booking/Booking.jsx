import { useState } from 'react'
import Header from '../Header/Header'
import axios from 'axios'
import '../Booking/booking.css'
import Popup from '../Popup/Popup'

export default function Booking(){


    const [formData,setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        model:'',
        street:'',
        city:'',
        state:'',
        pincode:''
    })

    const [popup,setPopup] = useState('')



    const generateBookingId = () =>{
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let counter = 0;
        while (counter < 7) {
            result += characters.charAt(Math.floor(Math.random() * 62));
            counter += 1;
        }
        return('VM'+result)
    }


    const handleBook = (event) =>{
        event.preventDefault()
        const bookingid = generateBookingId()
        const values = [formData,bookingid]
        axios.post('http://localhost:3001/book_now',values)
        .then(res=>{
            if(res.data==='Success')
                setPopup('Booking Successful')
        })
        .catch(err => console.log(err))
    }


    
    return(
        <div className="booking_">

            <Header/>

            <Popup message={popup} 
            status={ (popup==='Booking Successful') ? 'Success' : 'Fail' } /> 


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
                        onChange={e=>setFormData({...formData,firstName:e.target.value})} 
                        required />


                        <input type="text" 
                        placeholder='Last Name' 
                        id='Ln'
                        required 
                        onChange={e=>setFormData({...formData,lastName:e.target.value})}  />


                        <input type="email" 
                        placeholder='Email ID' 
                        minLength={13} id='Email' 
                        required 
                        onChange={e=>setFormData({...formData,email:e.target.value})}  />

                    
                        <input type="text" 
                        placeholder='Phone Number' 
                        minLength={10} 
                        maxLength={10} 
                        id='Ph'
                        title="Numbers and '(' ')' are only accepted"
                        pattern="[0-9]{10}" 
                        required 
                        onChange={e=>setFormData({...formData,phone:e.target.value})} />



                        <select id='Se' onChange={e=>setFormData({...formData,model:e.target.value})} required>

                            <option value="" selected disabled>Choose a model</option>
                            <option value="Volvo XC60">Volvo XC60</option>
                            <option value="Volvo S90">Volvo S90</option>
                            <option value="Mercedes AMG G63">Mercedes AMG G63</option>

                        </select>


                        <input type="text" 
                        placeholder='Street' 
                        id='St' 
                        required 
                        onChange={e=>setFormData({...formData,street:e.target.value})}  />
                    

                        <input type="text" 
                        placeholder='City' 
                        id='Ct' 
                        required 
                        onChange={e=>setFormData({...formData,city:e.target.value})}  />


                        <input type="text" 
                        placeholder='State' 
                        id='Sa' 
                        required 
                        onChange={e=>setFormData({...formData,state:e.target.value})}  />


                        <input type="text" 
                        placeholder='Pincode' 
                        minLength={6} 
                        maxLength={7} 
                        id='Pc' 
                        required 
                        onChange={e=>setFormData({...formData,pincode:e.target.value})} />
                    

                    <br />

                        <button id='Book_Button'>Book Now</button>

                    </center>

                </form>

            </div>

        </div>
    )
}