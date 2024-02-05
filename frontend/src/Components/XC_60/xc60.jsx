import Header from '../Header/Header'
import Xc60Img from '../Assets/xc60.png'
import Xc60_row1 from '../Assets/xc60_row1.png'
import Xc60_row2a from '../Assets/xc60_row2a.png'
import Xc60_row2b from '../Assets/xc60_row2b.png'
import Xc60_row3 from '../Assets/xc60_row3.png'
import Xc60_Booking from '../Assets/xc60_book.avif'
import {CurrencyRupee,ArrowRight} from '@mui/icons-material'
import './xc60.css'

function Xc60(){
    return(
        <div className='Xc_60'>
            <Header/>
            <div className="xc60_Hero">
                <img src={Xc60Img} alt="xc60Img" />
                <br />
                <center>
                <p><b>Intuitively yours.</b> Advanced technology helps connect your drive to <br />
                    personalised comfort and mobility</p>
                </center>
            </div>

            <div className="xc60_Features">
                <div className="xc60_features_Images">
                    <img src={Xc60_row1} alt="xc60_Img" id="xc60_Img1" />
                    <img src={Xc60_row2a} alt="xc60_Img" id="xc60_Img2a" />
                    <img src={Xc60_row2b} alt="xc60_Img" id="xc60_Img2b" />
                    <img src={Xc60_row3} alt="xc60_Img" id="xc60_Img3" />
                </div>

                <div className="xc60_features_desc">
                    <p id='para_1'><span id='para_1_heading'><b>Immerse yourself in a premium
                    experience. </b><br /></span>
                    XC60 is a popular and well-regarded vehicle known for <br />
                    its combination of safety features, comfort, and <br />
                    Scandinavian design aesthetics.</p>

                    <br />

                    <p id='para_2'><b>A refined drive </b><br />
                    <span id='span_txt'>Enjoy smooth take-offs,<br />
                    refined acceleration and<br />
                    the optimised efficiency<br />
                    and comfort of start/stop<br />
                    technology.<br />
                    </span></p>

                    <p id='para_3'><b>Lower fuel consumption </b><br />
                    <span id='span_txt'>The integrated starter<br />
                    supports the engine and<br />
                    reduces fuel consumption<br />
                    while delivering relaxed and<br />
                    controlled drive.<br />
                    </span></p>

                    
                    <p id='para_4'><b>Velocity with Google built in </b><br />
                    <span id='span_txt'>
                    Your Velocity with Google built in
                    is seamlessly integrated for a <br />
                    uniquely helpful, connected, and
                    more streamlined driving <br />
                    experience.
                    </span></p>
                    
                    <p id='para_5'>Volvo XC60 - Available at <CurrencyRupee/><span id='amount'>1,56,000</span></p>
                </div>
            </div>
            
            <div className="xc60_Bookings">
                    <div className="Booking_Section1">
                        <p id='book_1'><b>Book now</b> <br />
                        <span id='book_Sect_txt'>Book now to avail exciting offers.
                        Have miles of smiles.</span></p>
                        <button id='Btn_Book'>Book Now <ArrowRight/></button>

                        <p id='book_2'><b>Experience the luxury</b> <br />
                        <span id='book_Sect_txt'>Experience the comfort, luxury and safety features 
                        <br />of Velocity at a dealer near by.</span></p>
                        <button id='Btn_Test'>Test Drive<ArrowRight/></button>
                    </div>

                    <div className="Booking_Section2">
                        <img src={Xc60_Booking} alt="Xc60 Booking" />
                    </div>
            </div>
            
        </div>
    )
}
export default Xc60;