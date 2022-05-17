import './navbar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const NavBar = () => {

    return (
      
        <AppBar position="static">
          <Toolbar>
              <div className= 'container-logo'> 
              <img src="./"> </img>
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
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
    )
  }

    
export default NavBar