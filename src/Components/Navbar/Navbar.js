import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, useMediaQuery, Button, Drawer, List, ListItem, ListItemText, Box, Avatar, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Navlogo from '../../assets/Navbar/Navlogo.jpeg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';      

const Navbar = () => {
    const isMobile = useMediaQuery('(max-width: 957px)');
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null);
    const [userId, setUserId] = useState('');
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();


      useEffect(() => {
        setUserId(localStorage.getItem('userId'));
      }, []);
    
      useEffect(() => {
        axios.get(`https://localhost:7090/api/Users/${userId}`)
          .then(response => {
            setUsers(response.data);
          })
          .catch(error => {
            console.error('Error fetching users:', error);
          });
      }, [userId]);

    const handleProfileMenuOpen = (event) => {
        setProfileMenuAnchorEl(event.currentTarget);
        setProfileMenuOpen(true);
    };

    const handleProfileLogout = (event) => {
        localStorage.clear();
        setProfileMenuOpen(false);
        navigate('/login');
    };

    const handleProfileMenuClose = () => {
        setProfileMenuAnchorEl(null);
        setProfileMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleDropdownOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDropdownClose = () => {
        setAnchorEl(null);
    };




    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid #ccc' }}>
            <Box sx={{ marginLeft: '5%', marginRight: '5%' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {!isMobile && (
                        <div sx={{ display: 'flex', alignItems: 'center' }}>
                            {/* Logo */}
                            <img src={Navlogo} alt="Logo" style={{ width: '90%',marginLeft:'4670%' }} />
                        </div>
                    )}

                    {isMobile ? (
                        <div sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu}>
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="left" open={menuOpen} onClose={toggleMenu}>
                                <List>
                                    <img src={Navlogo} alt="Logo" style={{ width: '80%', marginLeft: '5%' }} />
                                    <ListItem button onClick={toggleMenu} sx={{ marginTop: '5%' }}>
                                        <ListItemText primary="Home" />
                                    </ListItem>
                                    <ListItem button onClick={toggleMenu}>
                                        <ListItemText primary="Book a space" />
                                    </ListItem>
                                    <ListItem button onClick={toggleMenu}>
                                        <ListItemText primary="Your bookings" />
                                    </ListItem>
                                    <ListItem button onClick={toggleMenu}>
                                        <ListItemText primary="Events" />
                                    </ListItem>
                                    <ListItem button onClick={toggleMenu}>
                                        <ListItemText primary="Calendar" />
                                    </ListItem>
                                </List>
                            </Drawer>
                        </div>
                    ) : (
                        <div sx={{ display: 'flex', alignItems: 'center' }}>
                         
                            <Button
                                color="inherit"
                                sx={{ textTransform: 'none' }}
                                onClick={handleDropdownOpen} // Open the dropdown menu
                            >
                            </Button>
                          
                        </div>
                    )}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Link to="/notification" style={{ textDecoration: 'none' }}>  <IconButton color="inherit" sx={{ mr: 1 ,marginLeft:'-100%'}}>
                            <NotificationsIcon />
                        </IconButton></Link>                      
                        <Menu
                            anchorEl={profileMenuAnchorEl}
                            open={profileMenuOpen}
                            onClose={handleProfileMenuClose}
                        >
                            <MenuItem component={Link} to="/userprofile" onClick={handleProfileMenuClose}>View Profile</MenuItem>
                            <MenuItem onClick={handleProfileLogout}>Logout</MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Box>
        </AppBar>
    );
};

export default Navbar;
