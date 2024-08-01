import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { MenuItem} from '@mui/material';
import { Segment,Facebook,YouTube,Twitter,Close} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import '../Menubar/Menubar.css'



export default function MenuItems() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (


    <div className='menu_bar'>
      <Button
        id="Menu_Button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Segment sx={{color:'white',fontSize:'2rem'}}></Segment>
      </Button>
      
      <Menu
        id="_menu"
        aria-labelledby="Menu_Button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          display:'flex',
          justifyContent:'center'
        }}
      >


            <button id='close_btn' onClick={handleClose}><Close sx={{fontSize:'1.5rem'}}/></button>

            <MenuItem id='menu_items'><Link to='/'style={{color:'black',width:'100%',textAlign:'center'}}>Home</Link></MenuItem>

            <MenuItem id='menu_items'><Link to='/profile'style={{color:'black',width:'100%',textAlign:'center'}}>Profile</Link></MenuItem>
              
            <MenuItem id='menu_items'><Link to='/login' style={{color:'black',width:'100%',textAlign:'center'}}>Login</Link></MenuItem>

            <MenuItem id='menu_items'><Link to='/register' style={{color:'black',width:'100%',textAlign:'center'}}>Register</Link></MenuItem>

            <MenuItem id='menu_items'><Link to='/test_drive' style={{color:'black',width:'100%',textAlign:'center'}}>Test Drive</Link></MenuItem>

            <MenuItem id='menu_items'><Link to='/book_now' style={{color:'black',width:'100%',textAlign:'center'}}>Book Now</Link></MenuItem>

            <MenuItem id='menu_items'><Link to='/accessories' style={{color:'black'}}>Accessories</Link></MenuItem>

            <MenuItem id='menu_items'><Link to='/feedback' style={{color:'black'}}>Feedback</Link></MenuItem>

            <MenuItem id='menu_items_model'>Models</MenuItem>

            <MenuItem id='menu_items'><Link to={'/xc60'} style={{color:'black',width:'100%',textAlign:'center'}}>Volvo XC60</Link></MenuItem>

            <MenuItem id='menu_items'><Link to={'/amg63'} style={{color:'black',width:'100%',textAlign:'center'}}>Mercedes G63</Link></MenuItem>

            <MenuItem id='menu_items'><Link to={'/s90'} style={{color:'black',width:'100%',textAlign:'center'}}>Volvo S90</Link></MenuItem>

            <MenuItem 
              id='menu_items'
              sx={{
              alignItems:'center',
              justifyContent:"space-around"
              }}>
              <Facebook className='social_icon' sx={{fontSize:'2rem',margin:'0px 10px',color:'black'}}/> 
              <YouTube className='social_icon' sx={{fontSize:'2rem',margin:'0px 10px',color:'black'}}/> 
              <Twitter className='social_icon' sx={{fontSize:'2rem',margin:'0px 10px',color:'black'}}/>
            </MenuItem>
        
      </Menu>


    </div>
    
  );
}