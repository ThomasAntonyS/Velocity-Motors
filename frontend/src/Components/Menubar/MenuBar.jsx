import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { MenuItem} from '@mui/material';
import { Segment,Facebook,YouTube,Twitter,Close } from '@mui/icons-material';
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
          marginLeft:'-50px',
          marginTop:'-45px'
        }}
      >
        <button id='close_btn' onClick={handleClose}><Close/></button>

        <MenuItem><Link to='/' style={{color:'black'}}>Home</Link></MenuItem>

        <MenuItem><Link to='/' style={{color:'black'}}>Cars</Link></MenuItem>

        <MenuItem><Link to='/login' style={{color:'black'}}>Login</Link></MenuItem>

        <MenuItem><Link to='/register' style={{color:'black'}}>Register</Link></MenuItem>

        <MenuItem><Link to='/test_drive' style={{color:'black'}}>Test Drive</Link></MenuItem>

        <MenuItem><Link to='/book_now' style={{color:'black'}}>Book Now</Link></MenuItem>

        <MenuItem><Link to='/' style={{color:'black'}}>Contact</Link></MenuItem>

        <MenuItem sx={{
          alignItems:'center',
          justifyContent:"space-around"
        }}><Facebook/> <YouTube/> <Twitter/></MenuItem>
        
      </Menu>

    </div>
  );
}