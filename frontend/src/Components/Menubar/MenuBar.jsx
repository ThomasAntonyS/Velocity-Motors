import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { MenuItem } from '@mui/material';
import { Segment,Facebook,YouTube,Twitter,Close } from '@mui/icons-material';
import './Menubar.css'
import { Link } from 'react-router-dom';

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
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          marginLeft:'-40px',
          overflow:'hidden'
        }}
      >
        <button id='close_btn' onClick={handleClose}><Close/></button>
        <MenuItem><Link to='/register'>Register</Link></MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <Facebook/> <YouTube/> <Twitter/>
      </Menu>
    </div>
  );
}