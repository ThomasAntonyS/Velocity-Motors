import {CurrencyRupee,ArrowRight} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import G63Hero from '../Assets/g63_hero.jpg'
import G63Book from '../Assets/g63_book.jpg'
import G63Img1 from '../Assets/g63_img.jpg'
import G63Img2 from '../Assets/g63_img1.jpg'
import G63Img3 from '../Assets/g63_img2.jpg'
import G63Img4 from '../Assets/g63_img3.jpg'
import '../g63/g63.css'

export default function G63(){
    return(
        <div className='g63'>
        <Header/>
        <div className="g63_Hero">
            <img src={G63Hero} alt="s90Img" />
            <br />
            <center>
            <p id='g63'><b>Stronger Than Time.</b></p>
            </center>
        </div>

        <div className="g63_Features">
        <div className="g63_features_desc">
                <p id='para_1'><span id='para_1_heading'><b>The G-Class remains true to itself</b><br /></span>
                In the interior, it combines impressive high-value appeal with a<br />
                strong design idiom. Fine materials and a perfect finish enrich <br />
                the interior. Details such as the air vents with angular surround and<br />
                grab handle for the front passenger are typical design elements <br />
                of the off-road vehicle. <br />
                </p>

                <br />

                <p id='para_2'><b>Unique and completely individual</b><br />
                <span id='span_txt'>With the G manufaktur, you can make your G-Class unique.<br />
                The individualisation programme offers you more than a million<br />
                combination options. Starting with the colour choice: choose from<br />
                29G manufaktur paint colours.
                </span></p>

                
                <p id='para_3'><b>All data included</b><br />
                <span id='span_txt'>
                As ever, superior off-road performance defines the G-Class.<br />
                The G-Class has always led the way in terms of climbing ability,<br />
                fording depth and side slope angle.
                </span></p>
                
                <p id='para_4'>Mercedes AMG G63 - Available at <CurrencyRupee/><span id='amount'>1,2,00,000</span></p>
            </div>

            <div className="g63_features_Images">
                <img src={G63Img1} alt="g63_Img" id="g63_Img1" />
                <img src={G63Img2} alt="g63_Img" id="g63_Img2" />
                <img src={G63Img3} alt="g63_Img" id="g63_Img3a" />
                <img src={G63Img4} alt="s90_Img" id="g63_Img3b" />
            </div>
        </div>
        
        <div className="g63_Bookings">
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
                    <img src={G63Book} alt="g63 Booking" />
                </div>
        </div>
        
    </div>
    )
}