import Header from '../Header/Header'
import Xc60Img from '../Assets/xc60.png'
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

            
        </div>
    )
}
export default Xc60;