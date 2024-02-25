import { useState } from 'react'
import Header from '../Header/Header'
import './accessories.css'
import { ArrowDownward, CurrencyRupeeOutlined } from '@mui/icons-material'
import axios from 'axios'

function Accessories(){

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [item,setitem] = useState('')


    const handleAccessories = (event) =>{
        event.preventDefault()
        axios.post('http://localhost:3001/accessories',[name,email,phone,address,item])
        .then(res=>{
            if(res.data==='Success'){
                alert("Order Placed...")
                window.location.reload(true)
            }
            else if(res.data==='No stock'){
                alert("Item out of Stock...")
                window.location.reload(true)
            }
            else{
                alert("Something went wrong...")
                window.location.reload(true)
            }
        })
    }

    return(
        <div className='accessories'>
            <Header/>

            <center>
                
            <p id='accessories_title'>Get your Accessories.</p>

                <div className="card_row1">
                    <div className="card">
                        <img src="https://m.media-amazon.com/images/I/81yYmQ8kkxL.jpg" alt="seat cover" />
                        <p id='card_title'>Seat covers.</p>
                        <p id='card_desc'>Car Seat Protector, Waterproof 600D Fabric Car
                        Seat Protector Cover with 2 Storage Pockets, Anti-Slip and 
                        Resistant Seat Cover Protector for your car.
                        </p>
                        <p id='price'><CurrencyRupeeOutlined/> 1749</p>
                        <a href='#form_input'>Add Item<ArrowDownward sx={{fontSize:'1rem'}}/></a>
                    </div>

                    <div className="card">
                        <img src="https://imgcdnblog.carmudi.com.ph/carmudi-ph/wp-content/uploads/2019/01/15133208/nylon-floor-mats-medium-blue_750x-750x375.jpg" alt="floor mat" />
                        <p id='card_title'>Floor mats. </p>
                        <p id='card_desc'>Hi Art PVC, Faux Leather, Nylon 7D Car Floor Mats 
                        Compatible with almost all cars, (All Black). Easy to wash and
                        guaranteed comfort for 2 years.
                        </p>
                        <p id='price'><CurrencyRupeeOutlined/> 299</p>
                        <a href='#form_input'>Add Item<ArrowDownward sx={{fontSize:'1rem'}}/></a>
                    </div>

                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIUKG6h1M02Cupeo5omqk7-1CXomsSVnh-g&usqp=CAU" alt="neck pillow" />
                        <p id='card_title'>Neck Pillow. </p>
                        <p id='card_desc'>Frido Ultimate Car Neck Rest Pillow, Ultrasoft Car
                        Pillow for Comfortable Car Rides, Superior Neck Support Cushion
                        with Washable Velvet Cover, Black.
                        </p>
                        <p id='price'><CurrencyRupeeOutlined/> 849</p>
                        <a href='#form_input'>Add Item<ArrowDownward sx={{fontSize:'1rem'}}/></a>
                    </div>
                </div>

                <div className="card_row2">
                    <div className="card">
                        <img src="https://media.istockphoto.com/id/1181581304/photo/cropped-view-of-car-cleaner-vacuuming-drivers-seat-in-car.jpg?s=612x612&w=0&k=20&c=Sn71gh-3Pfxb7SNUtDXxkpMaLLsVxTYyyLsV_ng3yFw=" alt="car vaccum" />
                        <p id='card_title'>Car Vaccum Cleaner. </p>
                        <p id='card_desc'>Voroly Car Vacuum Cleaner - Portable, High Power,
                        Handheld Vacuums 6Kpa 16 Ft Cord - 12v, Auto Accessories Kit for 
                        Interior Detailing - Black.
                        </p>
                        <p id='price'><CurrencyRupeeOutlined/> 849</p>
                        <a href='#form_input'>Add Item<ArrowDownward sx={{fontSize:'1rem'}}/></a>
                    </div>

                    <div className="card">
                        <img src="https://sobby.in/cdn/shop/products/800gsm-coral-fleece-cloth-car-interior-cleaning_aa61ac56-3fa3-416a-9205-33c8c4fcaa1f.jpg?v=1648143981&width=1946" alt="micro fiber cloth" />
                        <p id='card_title'>Micro Fibre Cloth. </p>
                        <p id='card_desc'>Auto Hub 800 GSM Heavy Microfiber Cloth for Car
                        Cleaning and Detailing, Dual Sided, Extra Thick Microfiber
                        Towel Lint-Free, 40cm x 40cm, Pack of 1.
                        </p>
                        <p id='price'><CurrencyRupeeOutlined/> 499</p>
                        <a href='#form_input'>Add Item<ArrowDownward sx={{fontSize:'1rem'}}/></a>
                    </div>
                </div>

                <p id='accessories_input'>Select your Accessories.</p>

                <form id='form_input' onSubmit={handleAccessories}>

                    <input type="text" placeholder='Full Name' onChange={e=>{setName(e.target.value)}} />

                    <input type="email" placeholder='Email' onChange={e=>{setEmail(e.target.value)}} />

                    <input type="text" maxLength={10} minLength={10} placeholder='Phone' onChange={e=>{setPhone(e.target.value)}} />

                    <input type="text" placeholder='Address' onChange={e=>{setAddress(e.target.value)}} />

                    <select onChange={e=>{setitem(e.target.value)}} >
                        <option value="" disabled selected>Choose a Item</option>
                        <option value="Seat Cover - ₹1749" >Seat Cover - ₹1749</option>
                        <option value="Floor Mat - ₹299" >Floor Mat - ₹299</option>
                        <option value="Neck Pillow - ₹1199" >Neck Pillow - ₹1199</option>
                        <option value="Car Vaccum Cleaner - ₹849" >Car Vaccum Cleaner - ₹849</option>
                        <option value="Micro Fiber Cloth - ₹499" >Micro Fiber Cloth - ₹499</option>
                    </select>

                    <button id='access_submit'>Submit</button>

                </form>

            </center>
            
        </div>
    )
}

export default Accessories