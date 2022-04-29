import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Menu.css'
import logo from '../../../images/logo-retina.png'
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: 'white' }} position="static" sx>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={logo} alt="" height='20px' />
                    <NavLink
                        to='/'
                        activeStyle={{
                            borderBottom: '3px solid #080337'
                        }}>
                        <span>Home</span>
                        <div className='nav-links'></div>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Menu;