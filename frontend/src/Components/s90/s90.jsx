import Header from '../Header/Header'
import s90Img from '../Assets/s90_hero.avif'
import s90_row1 from '../Assets/s90_row1.avif'
import s90_row2 from '../Assets/s90_row2a.avif'
import s90_row3a from '../Assets/s90_row3a.avif'
import s90_row3b from '../Assets/s90_row3b.webp'
import s90_Booking from '../Assets/s90_hero.avif'
import {CurrencyRupee,ArrowRight} from '@mui/icons-material'
import Lane_assist from '../Assets/lane_assist.mp4'
import Park_assist from '../Assets/park_assist.mp4'
import Avoid_collision from '../Assets/avoid_collision.mp4'
import { Link } from 'react-router-dom'
import './s90.css'
import Footer from '../Footer/Footer'

function S90(){
    return(
        <div className='s_90'>
            <Header/>
            <div className="s90_Hero">
                <img src={s90Img} alt="s90Img" />
                <br />
                <center>
                <p id='s90'><b>Expect more.</b>Embrace the new and control the journey. Meet our luxury sedan with<br />
                    Google built-in*.</p>
                </center>
            </div>

            <div className="s90_Features">
            <div className="s90_features_desc">
                    <p id='para_1'><span id='para_1_heading'><b>Indulge your senses.</b><br /></span>
                    Exclusive interior design details and high-end comfort<br />
                    make every mile a pleasure. <br />
                    </p>

                    <br />

                    <p id='para_2'><b>Mobility refined</b><br />

                    <span id='span_txt'>The XC90 mild hybrid has been engineered to deliver<br />
                    smooth take-offs and refined acceleration, making both<br />
                    city and highway journeys more refined.<br />
                    </span></p>

                    
                    <p id='para_3'><b>All data included</b><br />
                    
                    <span id='span_txt'>
                    With all data included, our Digital services package<br />
                    conveniently harmonises you, your S90 and your digital<br />
                    life.
                    </span></p>
                    
                    <p id='para_4'>Volvo S90 - Available at <CurrencyRupee/><span id='amount'>56,00,000</span></p>
                </div>

                <div className="s90_features_Images">
                    <img src={s90_row1} alt="s90_Img" id="s90_Img1" />
                    <img src={s90_row2} alt="s90_Img" id="s90_Img2" />
                    <img src={s90_row3b} alt="s90_Img" id="s90_Img3a" />
                    <img src={s90_row3a} alt="s90_Img" id="s90_Img3b" />
                </div>
            </div>

            <div className="s90_feat_visual">
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
                        the side of the car.
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
            
            <div className="s90_Bookings">
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
                        <img src={s90_Booking} alt="s90 Booking" />
                    </div>
            </div>

            <Footer/>
            
        </div>
    )
}
export default S90;