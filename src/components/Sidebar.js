import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = ({ isAdmin }) => {
  return (
    <div style={{ width: 250, backgroundColor: '#333', color: '#fff', height: '100vh' }}>
      <List>
       
        
    

        <Divider />
        <ListItem button component={Link} to="/messages">
          <ListItemText primary="Messages" style={{ color: '#fff' }} />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/emergency">
          <ListItemText primary="Emergency" style={{ color: '#fff' }} />
        </ListItem>
        <Divider />
        
        {/* Carpool link */}
        <ListItem button component={Link} to="/create-carpool">
          <ListItemText primary="Carpool" style={{ color: '#fff' }} />
        </ListItem>
        
        <Divider />
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About Us" style={{ color: '#fff' }} />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
