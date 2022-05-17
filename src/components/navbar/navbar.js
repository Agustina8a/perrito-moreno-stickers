import React from 'react'
import './navbar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const navbar = () => {

    return (
      
        <AppBar position="static" className="navstyle">
          <Toolbar className='toolbarcolor'>
              <div className= 'navbar-logo'> 
              <img src='./LogoLetras.png'> </img>
              <ul>
                  <li>
                      <Button>Home</Button>
                  </li>
                  <li>
                      <Button>Stickers</Button>
                  </li>
                  <li>
                      <Button>Tazas</Button>
                  </li>
                  <li>
                      <Button>Regalos</Button>
                  </li>
                  <li>
                      <Button>Contacto</Button>
                  </li>
              </ul>
              </div>
          </Toolbar>
        </AppBar>
    )
  }

    
export default NavBar