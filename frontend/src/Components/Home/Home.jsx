import Header from '../Header/Header'
import HomeHero from '../Assets/Hero_Video.mp4'
import s_90 from '../Assets/s90_hero.avif'
import V_60 from '../Assets/v60.avif'
import './home.css'
import { ArrowRight } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Contact from '../Contact/Contact'

export default function Home (){

    return(
        <div className="home">
            <Header/>
            <div className="Home_hero">
                <video src={HomeHero} autoPlay muted loop ></video>
            </div>

            <div className="Cars_">
                <center>
                    <p>Available Models</p>
                </center>
                <div className="Car_cards">

                    <div className="Card1">
                        <img src={V_60} alt="" />
                        <h2>VOLVO XC60</h2>
                        <h4>XC60 is a popular and well-regarded vehicle known for
                            its combination of safety features, comfort, and
                            Scandinavian design aesthetics.</h4>
                        <Link to='/v60' style={{display:'flex',
                                                color:'black',
                                                alignItems:'center',
                                                marginTop:'10px',
                                                marginLeft:'5px'}}>
                            Know more<ArrowRight/></Link>
                    </div>

                    <div className="Card2">
                        <img src={s_90} alt="" />
                        <h2>VOLVO S90</h2>
                    </div>

                    <div className="Card3">
                        <img src={V_60} alt="" />
                        <h2>VOLVO S90</h2>
                    </div>
                </div>
            </div>

            <Contact/>
            
        </div>
    )
}