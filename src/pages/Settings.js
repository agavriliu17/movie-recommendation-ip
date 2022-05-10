import React from "react";
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import PageLayout from "./PageLayout";

const Settings = () => {
  return <PageLayout>
    <Paper sx={{ width: 320, maxWidth: '100%', height: '100%',position: 'absolute',top: 0, left: 0 }}>
      <Typography ml="20px" fontSize="25px" mt={10}>
          Settings
        </Typography>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
           
          </ListItemIcon>
          <ListItemText>Account</ListItemText>
          <Typography variant="body2" color="text.secondary">
   
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            
          </ListItemIcon>
          <ListItemText>Display Language</ListItemText>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText>Password</ListItemText>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText>Subscription</ListItemText>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText>Help</ListItemText>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText>Privacy & Terms </ListItemText>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  </PageLayout>;
};

export default Settings;
