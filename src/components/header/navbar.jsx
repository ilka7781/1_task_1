import React from 'react';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import './header.scss';


const Navbar = (props) => {
    return (
        <div>
            {props.user?.displayName ? (
                <div>
                    <div className='navbar_menu'>
                        <Button><Link to='/main' className='nav_link'>Main</Link></Button>
                        <Button><Link to='/admin' className='nav_link'>Admin</Link></Button>
                        <Button onClick={props.handleSignOut}><Link to='/' className='nav_link'>Logout</Link></Button>
                    </div>

                </div>
            ) : (
                <Button className='nav_link'><Link to='/reg' className='nav_link'>Sign in</Link></Button>
            )}
        </div>
    );
};

export default Navbar;