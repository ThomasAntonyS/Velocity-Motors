import Header from '../Header/Header'
import './booking.css'

export default function Booking(){
    return(
        <div className="booking_">
            <Header/>

            <div className="booking_Content">
                <p id='book_heading'>avavavava</p>
                <p id='book_content'>afadadadad</p>

                <form >
                    <input type="text" placeholder='First Name' id='Fn' required/>
                    <input type="text" placeholder='Last Name' id='Ln' required/>
                    <input type="email" placeholder='Email Id' id='Email' required/>
                    <input type="text" placeholder='Phone Number' id='Ph' required/>

                    <select required id='Se'>
                        <option value="" selected disabled>Choose a model</option>
                        <option value="">Volvo XC60</option>
                        <option value="">Volvo S90</option>
                        <option value="">Mercedes AMG G63</option>
                    </select>

                    <input type="text" placeholder='Street' id='St' required/>
                    <input type="text" placeholder='City' id='Ct' required/>
                    <input type="text" placeholder='State' id='Sa' required/>
                    <input type="text" placeholder='Pincode' id='Pc' required/>

                    <button id='Book_Button'>Book Now</button>
                </form>
            </div>

        </div>
    )
}