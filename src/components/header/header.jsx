import logo from "../../img/logo.png"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Container} from "@mui/material";
import './header.scss';
import {UserAuth} from "../../context/authContext";
import {Link} from "react-router-dom";

export default function ButtonAppBar() {
    const {user, logOut} = UserAuth();

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
                <Container>
                    <Toolbar className={'navbar'}>
                        <Link to='/main'>
                            <img src={logo} className={'navbar_logo'} alt="logo"/>
                        </Link>


                        {user?.displayName ? (
                            <div>
                                <Button><Link to='/main' className='nav_link'>Main</Link></Button>
                                <Button><Link to='/admin' className='nav_link'>Admin</Link></Button>
                                <Button onClick={handleSignOut}><Link to='/' className='nav_link'>Logout</Link></Button>
                            </div>
                        ) : (
                            <Button className='nav_link'><Link to='/reg' className='nav_link'>Sign in</Link></Button>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
