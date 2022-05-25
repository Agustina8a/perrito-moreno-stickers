import React from 'react'
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <AppBar position="static" className="navstyle">
            <Toolbar className='toolbarcolor'>
                <div className='navbar-logo'>
                    <img src='./logo letras.png'></img>
                </div>
                <ul>
                    <li>
                        <button>Home</button>
                    </li>
                    <li>
                        <button>Stickers</button>
                    </li>
                    <li>
                        <button>Tazas</button>
                    </li>
                    <li>
                        <button>Regalos</button>
                    </li>
                    <li>
                        <button>Contacto</button>
                    </li>
                </ul>
                <CartWidget />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar