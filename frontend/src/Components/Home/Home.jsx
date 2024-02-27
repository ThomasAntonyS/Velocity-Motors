import Header from '../Header/Header'
import HomeHero from '../Assets/Home_hero1.jpg'
import S_90 from '../Assets/s90_hero.avif'
import V_60 from '../Assets/v60.avif'
import G_63 from '../Assets/g63_hero.jpg'
import { ArrowDownward, ArrowRight } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Contact from '../Contact/Contact'
import  '../Home/home.css'

export default function Home (){

    return(
        <div className="home">
            <Header/>
            <div className="Home_hero">
                <img src={HomeHero} alt="Home page hero bg img" />

                <center>
                    <p id='p1'>Creating new era of driving</p>
                    <p id='p2'>Scroll Down to Know more <ArrowDownward sx={{color:'white'}}/></p>
                </center>

            </div>

            <div className="Cars_">

                <center>
                    <p>Available Models</p>
                </center>

                <div className="Car_cards">

                    <div className="Card">
                        <img src={V_60} alt="" />

                        <h2>VOLVO XC60</h2>

                        <h4>XC60 is a popular and well-regarded vehicle known for
                            its combination of safety features, comfort, and
                            Scandinavian design aesthetics.</h4>

                        <Link to='/xc60' style={{display:'flex',
                                                color:'black',
                                                alignItems:'center',
                                                marginTop:'10px',
                                                marginLeft:'10px'}}
                                                onClick= {() => window.scrollTo(0, 0)}>
                            Know more<ArrowRight/></Link>
                    </div>

                    <div className="Card">
                        <img src={G_63} alt="" />

                        <h2>Mercedes AMG G63</h2>

                        <h4>The G-Class has always led the way in terms of climbing ability, 
                            fording depth and side slope angle. The Mercedes <br />
                            AMG G63</h4>

                        <Link to='/amg63' style={{display:'flex',
                                            color:'black',
                                            alignItems:'center',
                                            marginTop:'10px',
                                            marginLeft:'10px'}}
                                            onClick= {() => window.scrollTo(0, 0)}>
                        Know more<ArrowRight/></Link>
                    </div>

                    <div className="Card">
                        <img src={S_90} alt="" />

                        <h2>VOLVO S90</h2>

                        <h4>Expect more.Embrace the new Volvo S90 and control the journey. Meet our
                            luxury sedan with
                            Google built-in.</h4>

                        <Link to='/s90' style={{display:'flex',
                                            color:'black',
                                            alignItems:'center',
                                            marginTop:'32px',
                                            marginLeft:'10px'}}
                                            onClick= {() => window.scrollTo(0, 0)}>
                        Know more<ArrowRight/></Link>

                    </div>
                </div>
            </div>

            <Contact/>

        </div>
    )
}