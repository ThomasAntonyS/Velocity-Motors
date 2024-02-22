import '../Testdrive/testdrive.css'
import Header from '../Header/Header'
import TestDriveImg from '../Assets/TestDrive1.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/icons-material/Menu'

export default function TestDrive(){

    const [name,SetName]=useState('')
    const [email,SetEmail]=useState('')
    const [phone,SetPhone]=useState('')
    const [model,SetModel]=useState('')
    const [slot,setSlot]=useState()
    const navigate = useNavigate()

    const handleTestDrive=(event)=>{
        
        axios.post('http://localhost:3001/test_drive',[name,email,phone,model,slot])
        .then(res=>{
            if(res.data==='Slot unavailable')
                alert("Slot unavailable...")
            if(res.data==='Success')
            {
                alert(" Slot booking Successful")
                window.location.reload(true)
            }
            else{
                alert("something went wrong...")
                window.location.reload(true)
            }
        })
        .catch(Error=>console.log(Error))
    }
 
    return(
        <div className="Test_Drive">
            <Header/>

            <div className="TD_sections">

                <center>
                    <p id='TD_heading'>Test Drive.</p>

                    <p id='TD_content'>From the smooth acceleration on the open road to the effortless handling through twists and turns, each moment is an invitation to discover the <br />
                        extraordinary. This is more than a test drive, it's a glimpse into the future of driving pleasure. Come, take the wheel, and let the <br />
                        road become your canvas for excitement and exploration. Your journey towards automotive excellence starts here.<br />
                        </p>
                    
                    <form onSubmit={handleTestDrive}>
                        <input type="text" placeholder='Name' onChange={e=>{SetName(e.target.value)}} required/>

                        <input type='email' placeholder='Email' onChange={e=>{SetEmail(e.target.value)}} required/>

                        <br />
                        
                        <input type="text" placeholder='Phone'  onChange={e=>{SetPhone(e.target.value)}} required/>

                        <select onChange={e=>{SetModel(e.target.value)}} required>
                            <option selected disabled>Select a model</option>
                            <option value="Volvo XC60">Volvo XC60</option>
                            <option value="Volvo S90">Volvo S90</option>
                            <option value="Mercedes AMG G63">Mercedes AMG G63</option>
                        </select>

                        <br />

                        <select onClick={e=>{setSlot(e.target.value)}}>
                            <option value="" disabled selected>Select a slot</option>
                            <option value="20-04-2024,10AM">20-04-2024,10AM</option>
                            <option value="20-04-2024,12PM">20-04-2024,12PM</option>
                            <option value="20-04-2024,2PM">20-04-2024,2PM</option>
                            <option value="20-04-2024,4PM">20-04-2024,4PM</option><option value="20-04-2024,9AM">20-04-2024,9AM</option>
                            <option value="20-04-2024,6PM">20-04-2024,6PM</option>
                        </select>

                        <br />

                        <button>Book Now</button>

                    </form>
                </center>
                    
            </div>

                
        </div>

    )
}