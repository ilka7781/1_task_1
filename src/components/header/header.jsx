import logo from "../../img/logo.png"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Container, useMediaQuery, useTheme} from "@mui/material";
import './header.scss';
import {UserAuth} from "../../context/authContext";
import {Link} from "react-router-dom";
import DrawerComp from "./Drawer";
import Navbar from "./navbar";

export default function ButtonAppBar() {
    const {user, logOut} = UserAuth();
    const theme= useTheme();
    const isMatch= useMediaQuery(theme.breakpoints.down("md"));

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" color={'inherit'}>
                <Container className='navbar_container'>
                    <Toolbar className='navbar'>
                            {isMatch? (
                                <div className='navbar_second'>
                                    <Link to='/main'>
                                        <img src={logo} className={'navbar_logo'} alt="logo"/>
                                    </Link>
                                    <DrawerComp className='navbar_second' user={user} handleSignOut={handleSignOut}/>
                                </div>
                            ) : (
                                <div className='navbar_second'>
                                    <Link to='/main'>
                                        <img src={logo} className={'navbar_logo'} alt="logo"/>
                                    </Link>
                                    <Navbar  handleSignOut={handleSignOut} user={user} />
                                </div>
                            )
                            }
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
