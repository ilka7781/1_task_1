import React, {useState} from 'react';
import './drawer.scss';
import MenuIcon from "@mui/icons-material/Menu";
import {Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const DrawerComp = (props) => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <div className='drawer_navbar'>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}} onClick={()=> setOpenDrawer(true)} className='menu_icon'>
            <MenuIcon className='menu_icon_but'/>
           </IconButton>

            <Drawer open={openDrawer}>
                <IconButton
                    className='menu_button'
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }} onClick={()=> setOpenDrawer(false)}>
                    <MenuIcon className='menu_button_icon'/>
                </IconButton>

                <List >
                    <ListItem className='navbar_list'>
                        <ListItemIcon>
                            <ListItemText >
                                <Button ><Link to='/main' className='nav_link'>Main</Link></Button>
                            </ListItemText>
                        </ListItemIcon>
                        <ListItemIcon>
                            <ListItemText>
                                <Button><Link to='/admin' className='nav_link'>Admin</Link></Button>
                            </ListItemText>
                        </ListItemIcon>
                        {
                            props.user?.displayName ? (
                                <ListItemIcon>
                                    <ListItemText>
                                        <Button onClick={props.handleSignOut}><Link to='/' className='nav_link'>Logout</Link></Button>
                                    </ListItemText>
                                </ListItemIcon>
                            ) : (
                                <ListItemIcon>
                                    <ListItemText>
                                        <Button className='nav_link'><Link to='/reg' className='nav_link'>Sign in</Link></Button>
                                    </ListItemText>
                                </ListItemIcon>
                                )
                        }

                    </ListItem>
                </List>
            </Drawer>

        </div>
    );
};

export default DrawerComp;