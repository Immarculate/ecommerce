import React from 'react';
import { AppBar, Toolbar, Menu, MenuItem, IconButton, Badge, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ totalItems }) {
   


  return (
    <div className='navbar'>
        <AppBar position="fixed" className='appbar'>
          <Toolbar>
            <Typography className='flex items-center' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img src="data:image/png;base64,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" alt="logo" className='image' />
                <span className='font-bold ml-2'>Mus Mart</span>
            </Typography>
            {/* <div className='menu'>
                <span>Home</span>
                <span>Products</span>
                <span>About us</span>
            </div> */}
           <div>
            
           <IconButton component={Link} to="/cart"
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
           </div>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar