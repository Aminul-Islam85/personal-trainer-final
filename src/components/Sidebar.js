import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        zIndex: open ? undefined : 1000,
    },
}));

const Sidebar = ({ open }) => {
    return (
        <StyledDrawer
            open={open}
            variant="persistent"
            anchor="left"
        >
            <List>
                <Toolbar />
                {/* Add your navigation links here */}
                <ListItem button component={NavLink} to="/customers" >
                    <ListItemIcon>
                        {/* Add an icon */}
                    </ListItemIcon>
                    <ListItemText primary="Customers" />
                </ListItem>
                <ListItem button component={NavLink} to="/Trainings" >
                    <ListItemIcon>
                        {/* Add an icon */}
                    </ListItemIcon>
                    <ListItemText primary="Trainings" />
                </ListItem>
                <ListItem button component={NavLink} to="/Calendar" >
                    <ListItemIcon>
                        {/* Add an icon */}
                    </ListItemIcon>
                    <ListItemText primary="Calendar" />
                </ListItem>
                {/* Add more ListItem components for other routes */}
            </List>
        </StyledDrawer>
    );
};

export default Sidebar;
