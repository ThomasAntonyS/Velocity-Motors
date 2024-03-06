import axios from 'axios'
import { useState } from 'react'
import Header from '../Header/Header'
import Popup from '../../Components/Popup/Popup'
import './feedback.css'

function Feedback(){


    const [name,SetName] = useState('')
    const [email,SetEmail] = useState('') 
    const [date,SetDate] = useState('')
    const [model,SetModel] = useState('')
    const [msg,SetMsg] = useState('')
    const [popup,setPopup] = useState('')


    const handleFeedback = (event) =>{
        event.preventDefault()
        axios.post('http://localhost:3001/feedback',[name,email,model,date,msg])
        .then(res=>{
            if(res.data==='Thanks')
            setPopup('Thanks for your Feedback')
        })
        .catch(err=> console.log(err))
    }



    return(
        <div className="feedback">

            <Header/>

            <Popup message={popup} 
            status={'Success'}/>


            <center>

                <p id='feedback_title'>Give Us Your Feedback</p>

                <form onSubmit={handleFeedback}>


                        <input type="text" 
                        placeholder='Name' 
                        onChange={e=>{SetName(e.target.value)}} 
                        required />


                        <input type='email' 
                        placeholder='Email' 
                        onChange={e=>{SetEmail(e.target.value)}} 
                        required />


                        <br />


                        <select onChange={e=>{SetModel(e.target.value)}} required>

                            <option selected disabled>Select your model</option>
                            <option value="Volvo XC60">Volvo XC60</option>
                            <option value="Volvo S90">Volvo S90</option>
                            <option value="Mercedes AMG G63">Mercedes AMG G63</option>

                        </select>


                        <input type="text" 
                        onChange={e=>{SetDate(e.target.value)}} 
                        placeholder='Date of purchase' 
                        required/>


                        <br />

                        <textarea 
                        cols="20" rows="5" 
                        placeholder="Your Feedback !" 
                        onChange={e=>{SetMsg(e.target.value)}} ></textarea>


                        <br />
                        

                        <button id='feedback_submit'>Send My Feedback</button>

                </form>

            </center>

        </div>
    )
}

export default Feedback