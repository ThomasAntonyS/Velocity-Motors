import '../Testdrive/testdrive.css'
import Header from '../Header/Header'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Popup from '../Popup/Popup'


export default function TestDrive(){

    const [name,SetName] = useState('')
    const [email,SetEmail] = useState('') 
    const [phone,SetPhone] = useState('')
    const [model,SetModel] = useState('')
    const [slot,setSlot] = useState('')
    const [popup,setPopup] = useState('')
    const [curDate,setDate] = useState('')
    const [curMonth,setMonth] = useState('')
    const [curYear,setYear] = useState('')


    useEffect(()=>{
        const date = new Date()
        setDate((date.getDate()))
        setMonth(((date.getMonth()+1)))
        setYear((date.getFullYear()))
    },[])


    const handleTestDrive=(event)=>{
        event.preventDefault()
        axios.post('http://localhost:3001/test_drive',[name,email,phone,model,slot])
        .then(res=>{

            if(res.data==='Slot unavailable')
            {
                setPopup("Slot unavailable...")
            }
            if(res.data==='Success')
            {
                setPopup('Slot booking Successfull')
            }
        })
        .catch(Error=>console.log(Error))
    }

 
    return(

        <div className="Test_Drive">

            <Header/>

            <Popup message={popup} 
            status={ (popup==='Slot booking Successfull') ? 'Success' : 'Fail' } />


            <div className="TD_sections">

                <center>

                    <p id='TD_heading'>Test Drive.</p>

                    <p id='TD_content'>From the smooth acceleration on the open road to the effortless handling through twists and turns, each moment is an invitation to discover the <br />
                        extraordinary. This is more than a test drive, it's a glimpse into the future of driving pleasure.<br />
                    </p>

                    
                    <form onSubmit={handleTestDrive}>

                        <input type="text" 
                        placeholder='Name' 
                        onChange={e=>{SetName(e.target.value)}} 
                        required/>


                        <input type='email' 
                        placeholder='Email' 
                        onChange={e=>{SetEmail(e.target.value)}} 
                        required/>

                        
                        <input type="text" 
                        placeholder='Phone' 
                        minLength={10} 
                        maxLength={10} 
                        onChange={e=>{SetPhone(e.target.value)}} 
                        required/>


                        <select onChange={e=>{SetModel(e.target.value)}} required>

                            <option selected disabled>Select a model</option>
                            <option value="Volvo XC60">Volvo XC60</option>
                            <option value="Volvo S90">Volvo S90</option>
                            <option value="Mercedes AMG G63">Mercedes AMG G63</option>

                        </select>
                        
                        <select onClick={e=>{setSlot(e.target.value)}}>

                            <option value="" disabled selected>Select a slot</option>
                            <option value={curDate+"-"+curMonth+"-"+curYear+",10AM"}>{curDate}-{curMonth}-{curYear},10AM</option>
                            <option value={curDate+"-"+curMonth+"-"+curYear+",12PM"}>{curDate}-{curMonth}-{curYear},12PM</option>
                            <option value={curDate+"-"+curMonth+"-"+curYear+",2PM"}>{curDate}-{curMonth}-{curYear},2PM</option>
                            <option value={curDate+"-"+curMonth+"-"+curYear+",4PM"}>{curDate}-{curMonth}-{curYear},4PM</option>
                            <option value={curDate+"-"+curMonth+"-"+curYear+",6PM"}>{curDate}-{curMonth}-{curYear},6PM</option>

                        </select>


                        <br />


                        <button>Book Now</button>

                    </form>
                    
                </center>
                    
            </div>
                
        </div>

    )
}