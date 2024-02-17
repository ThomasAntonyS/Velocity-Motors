import './Styles/testdrive.css'
import Header from '../Header/Header'
import TestDriveImg from '../Assets/TestDrive1.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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
                <div className="left">

                    <p>Test Drive</p>
                    <div className="underline"></div>
                    
                    <form onSubmit={handleTestDrive}>
                        <input type="text" placeholder='Name' onChange={e=>{SetName(e.target.value)}} required/>

                        <input type='email' placeholder='Email' onChange={e=>{SetEmail(e.target.value)}} required/>
                        
                        <input type="text" placeholder='Phone'  onChange={e=>{SetPhone(e.target.value)}} required/>

                        <select onChange={e=>{SetModel(e.target.value)}} required>
                            <option selected disabled>Select a model</option>
                            <option value="Volvo XC60">Volvo XC60</option>
                            <option value="Volvo S90">Volvo S90</option>
                            <option value="Mercedes AMG G63">Mercedes AMG G63</option>
                        </select>

                        <select onClick={e=>{setSlot(e.target.value)}}>
                            <option value="" disabled selected>Select a slot</option>
                            <option value="20-04-2024,9AM">20-04-2024,9AM</option>
                            <option value="20-04-2024,12PM">20-04-2024,12PM</option>
                        </select>

                        <button>Book Now</button>

                    </form>
                    
                </div>

                <div className="right">
                    <img src={TestDriveImg} alt="" />
                </div>
                
            </div>
            
        </div>
    )
}