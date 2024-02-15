import './testdrive.css'
import Header from '../Header/Header'
import {Button} from '@mui/material'
import TestDriveImg from '../Assets/TestDrive1.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function TestDrive(){

    const [name,SetName]=useState('')
    const [email,SetEmail]=useState('')
    const [phone,SetPhone]=useState('')
    const [model,SetModel]=useState('')
    const navigate = useNavigate()

    const handleTestDrive=(event)=>{
        
        axios.post('http://localhost:3001/test_drive',[name,email,phone,model])
        .then(res=>{
            if(res.data==='Success')
            {
                alert('Test drive booking successsful')
            }
            else{
                alert("something went wrong...")
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