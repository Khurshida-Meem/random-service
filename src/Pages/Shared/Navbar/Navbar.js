import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../images/logo-retina.png'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem>
                <NavLink
                    to='/'
                    activeStyle={{
                        borderBottom: '3px solid #080337'
                    }}
                >
                    <span>Home</span>
                    <div className='nav-links'></div>
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink
                    to='/pages'
                    activeStyle={{
                        borderBottom: '3px solid #080337'
                    }}
                >
                    <span>
                        Pages
                    </span>
                    <div className='nav-links'></div>
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink
                    to='/blogs'
                    activeStyle={{
                        borderBottom: '3px solid #080337'
                    }}
                >
                    <span>
                        Blogs
                    </span>
                    <div className='nav-links'></div>
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink
                    to='/contacts'
                    activeStyle={{
                        borderBottom: '3px solid #080337'
                    }}
                >
                    <span>
                        Contacts
                    </span>
                    <div className='nav-links'></div>
                </NavLink>
            </MenuItem>
            <MenuItem>
                <SearchIcon />
            </MenuItem>
            <MenuItem>
                <button className='secondary-btn'>Let's Talk</button>
            </MenuItem>

        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: 'white', boxShadow: 'none' }} position="static">
                <Toolbar>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            sx={{color: '#080337'}}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <img src={logo} alt="" height='20px' />

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', margin: '20px' }}>
                        <NavLink style={{ marginRight: '2rem' }} to='/' >
                            <span>Home</span>
                            <div className='nav-links'></div>
                        </NavLink>
                        <NavLink style={{ marginRight: '2rem' }} to='/' >
                            <span >Pages </span>
                            <div className='nav-links'></div>
                        </NavLink>
                        <NavLink style={{ marginRight: '2rem' }} to='/' >
                            <span >Blog</span>
                            <div className='nav-links'></div>
                        </NavLink>
                        <NavLink style={{ marginRight: '2rem' }} to='/' >
                            <span >Contacts</span>
                            <div className='nav-links'></div>
                        </NavLink>
                        <MenuItem>
                            <SearchIcon sx={{ color: '#080337' }} />
                        </MenuItem>
                        <MenuItem>
                            <button className='secondary-btn'>Let's Talk</button>
                        </MenuItem>

                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            sx={{color: '#080337'}}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
};

export default Navbar;