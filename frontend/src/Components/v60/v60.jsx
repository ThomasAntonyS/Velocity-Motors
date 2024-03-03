import Header from '../Header/Header'
import v60Img from '../Assets/v60.avif'
import v60_row1 from '../Assets/v60_row1.png'
import v60_row2a from '../Assets/v60_row2a.png'
import v60_row2b from '../Assets/v60_row2b.png'
import v60_row3 from '../Assets/v60_row3.png'
import v60_Booking from '../Assets/v60_book.avif'
import {CurrencyRupee,ArrowRight} from '@mui/icons-material'
import Lane_assist from '../Assets/lane_assist.mp4'
import Park_assist from '../Assets/park_assist.mp4'
import Avoid_collision from '../Assets/avoid_collision.mp4'
import { Link } from 'react-router-dom'
import '../v60/v60.css'
import Footer from '../Footer/Footer'

function v60(){
    return(
        <div className='v_60'>
            <Header/>
            <div className="v60_Hero">
                <img src={v60Img} alt="v60Img" />

                <br />

                <center>
                <p id='xc'><b>Intuitively yours.</b> Advanced technology helps connect your drive to <br />
                    personalised comfort and mobility</p>
                </center>
            </div>

            <div className="v60_Features">
                <div className="v60_features_Images">
                    <img src={v60_row1} alt="v60_Img" id="v60_Img1" />
                    <img src={v60_row2a} alt="v60_Img" id="v60_Img2a" />
                    <img src={v60_row2b} alt="v60_Img" id="v60_Img2b" />
                    <img src={v60_row3} alt="v60_Img" id="v60_Img3" />
                </div>

                <div className="v60_features_desc">
                    <p id='para_1'><span id='para_1_heading'><b>Immerse yourself in a premium
                    experience. </b><br /></span>
                    XC60 is a popular and well-regarded vehicle known for 
                    its combination of safety features, comfort, and 
                    Scandinavian design aesthetics.</p>

                    <br />

                    <p id='para_2'><b>A refined drive </b><br />
                    <span id='span_txt'>Enjoy smooth take-offs,
                    refined acceleration and
                    the optimised efficiency
                    and comfort of start/stop
                    technology.
                    </span></p>

                    <p id='para_3'><b>Lower fuel consumption </b><br />
                    <span id='span_txt'>The integrated starter
                    supports the engine and
                    reduces fuel consumption
                    while delivering relaxed and
                    controlled drive.
                    </span></p>

                    
                    <p id='para_4'><b>Velocity with Google built in </b><br />
                    <span id='span_txt'>
                    Your Velocity with Google built in
                    is seamlessly integrated for a 
                    uniquely helpful, connected, and
                    more streamlined driving 
                    experience.
                    </span></p>
                    
                    <p id='para_5'>Volvo V60 - Available at <CurrencyRupee sx={{fontSize:'1rem'}}/><span id='amount'>75,00,000</span></p>
                </div>
            </div>

            <div className="v60_feat_visual">
                <div className="visual_feature1">
                    <video src={Lane_assist} autoPlay loop muted></video>

                    <center>
                        <p><b>Corrects drifting</b> <br />
                        If you start drifting across
                        your car can detect this
                        and correct the steering,
                        helping you back to a safer
                        position on the road.
                        </p>
                    </center>

                </div>

                <div className="visual_feature2">
                    <video src={Park_assist} autoPlay loop muted></video>

                    <center>
                        <p><b>360° parking view</b> <br />
                        With four cameras
                        providing a 360° view and
                        flank sensors increasing
                        awareness of objects at
                        the side.
                        </p>
                    </center>

                </div>

                <div className="visual_feature3">
                    <video src={Avoid_collision} autoPlay loop muted></video>

                    <center>
                        <p><b>Help crossing traffic</b> <br />
                        Our safety assistance
                        technology can help when
                        making a turn across
                        oncoming traffic.
                        </p>
                    </center>

                </div>
            </div>
            
            <div className="v60_Bookings">
                    <div className="Booking_Section1">
                        <p id='book_1'><b>Book now</b> <br />

                        <span id='book_Sect_txt'>Book now to avail exciting offers.
                        Have miles of smiles.</span></p>

                        <Link to='/book_now'><button id='Btn_Book'>Book Now <ArrowRight/></button></Link>


                        <p id='book_2'><b>Experience the luxury</b> <br />

                        <span id='book_Sect_txt'>Experience the comfort, luxury and safety features 
                        <br />of Velocity at a dealer near by.</span></p>
                        
                        <Link to='/test_drive'><button id='Btn_Test'>Test Drive<ArrowRight/></button></Link>
                    </div>

                    <div className="Booking_Section2">
                        <img src={v60_Booking} alt="v60 Booking" />
                    </div>
            </div>

            <Footer/>
            
        </div>
    )
}
export default v60;