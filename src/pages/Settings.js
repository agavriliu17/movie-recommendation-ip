import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PageLayout from "./PageLayout";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from "@mui/material/Divider";
import Stack from '@mui/material/Stack';
import Avatar from "@mui/material/Avatar";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
};


  
const Settings = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const [value, setValue] = React.useState(0);
  const [state, setState] = React.useState({
    same: true,
    en: false,
    ro: false,
  });
  const [name, setName] = React.useState();
  const [input, setInput] = React.useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = React.useState({
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChangePass = (event, key) => {
    setInput({ ...input, [key]: event.target.value });
  };

  const handleSubmitPass = () => {
    const passwordError =
      input.password.length < 8
        ? "Your password must be at at least 8 characters long "
        : "";

    const confirmPasswordError =
      input.confirmPassword !== input.password
        ? "The password provided does not match"
        : "";

    if (passwordError === "" && confirmPasswordError === "") {
      alert("Password has been successfully reset");
      navigate("/login");
    } else {
      setError({
        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
    }
  };
  const handleChangeAccount = (event) => {
    setName(event.target.value);
  };
  const handleChangeForm = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { same, en, ro } = state;


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const Input = styled('input')({
    display: 'none',
  });

  return <PageLayout >
  <Paper sx={{width: '100%', height: '100%',position: 'absolute',top: 0, left: 0 }}>
    <Typography ml="20px" fontSize="25px" mt={10}>
        Settings
      </Typography>
      <Box
    sx={{display: 'flex', height: '100%'}}
   
  >
      <Tabs
      textColor="white"
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      sx={{ borderRight: 1, borderColor: 'divider', color: "#bfbbbb"}}
    >
      <Tab  label="Account" {...a11yProps(0)} />
      <Tab label="Display Language" {...a11yProps(1)} />
      <Tab label="Password" {...a11yProps(2)} />
      <Tab label="Subscription" {...a11yProps(3)} />
      <Tab label="Help" {...a11yProps(4)} />
      <Tab label="Privacy & Terms" {...a11yProps(5)} />
    </Tabs>
    <TabPanel value={value} index={0} >
    <Card sx={{ width: '100%', minWidth:'560px'}}>
    <CardContent>
    <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 }, 
          display: "flex",
          flexDirection: "column",
          paddingLeft: "10px"
        }}
        noValidate
        autoComplete="off"
      >
     <Typography ml="10px" mb="20px" fontSize="25px"  align ="left">
    Account
    </Typography> 
    <Divider />
    <Typography ml="20px" mt="10px" fontSize="15px" color="#fbfcca">
      Avatar
      </Typography>
    <Stack  direction="row" alignItems="center" spacing={3} > 
      {selectedImage && (
        <Avatar sx={{mb:"20px", mt:"20px", width:"50px", height:"50px"}} alt="not fount"  src={URL.createObjectURL(selectedImage)} />
      )}
      {!selectedImage && (
        <Avatar sx={{mb:"20px", mt:"20px", width:"50px", height:"50px"}} alt="Remy Sharp"  src="/static/images/avatar/1.jpg" />
      )}
    

    <Button
  variant="contained"
  component="label"
>
Upload
<input
        type="file"
        name="myImage"
        hidden
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
</Button>
<Button  variant="contained" onClick={()=>setSelectedImage(null)}>
      Remove
      <input
        type="file"
        name="myImage"
        hidden
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </Button>
  </Stack>
  <Divider />
  <Box
      sx={{
        '& > :not(style)': { mr: 1}, 
        display: "flex",
        flexDirection: "row",
        
      }}>
        
  <Typography width="50%" mt="10px" fontSize="15px" color="#fbfcca" align="left">
      Display name
      </Typography>
      <Typography width="50%" mt="10px" fontSize="15px" color="#fbfcca" align="left">
      Full name
      </Typography>
      </Box>
  <Box
      sx={{
        '& > :not(style)': { mr: 1}, 
        display: "flex",
        flexDirection: "row",
        
      }}>
        <TextField
          id="outlined-name"
          label="Display name"
          color="secondary"
          value={name}
          onChange={handleChangeAccount}
          InputLabelProps={{
            sx: {
              color: "#8c8c8c",
            },
          }}
          
        />
        <TextField 
        id="outlined-uncontrolled" 
        label="Full name" 
        color="secondary"
        InputLabelProps={{
          sx: {
            color: "#8c8c8c",
          },
        }} />
        </Box>
        <Divider />
        <Box
      sx={{
        '& > :not(style)': { mr: 1}, 
        display: "flex",
        flexDirection: "row",
        
      }}>
        
  <Typography width="50%" mt="10px" fontSize="15px" color="#fbfcca" align="left">
      Email address
      </Typography>
      <Typography width="50%" mt="10px" fontSize="15px" color="#fbfcca" align="left">
      Phone number
      </Typography>
      </Box>
        <Box
      sx={{
        '& > :not(style)': { mr: 1}, 
        display: "flex",
        flexDirection: "row",
        
      }}>
        <TextField  
        id="outlined-uncontrolled" 
        label="Email address"
        color="secondary" 
        type="email"
        InputLabelProps={{
          sx: {
            color: "#8c8c8c",
          },
        }} />
        <TextField  
        id="outlined-uncontrolled" 
        label="Phone number"
        color="secondary"
        type="phone"
        InputLabelProps={{
          sx: {
            color: "#8c8c8c",
          },
        }} />
        </Box>
        <Divider />
      <CardActions>
       <Button size="small" variant="contained">Save changes</Button>
    </CardActions>
    </Box>
    </CardContent>
  </Card>   
  </TabPanel>
    <TabPanel value={value} index={1}>
    <Card sx={{ width: '100%', minWidth:'560px'}}>
    <CardContent>
    <Box
      sx={{
        '& > :not(style)': { m: 1 }, 
        display: "flex",
        flexDirection: "column",
        paddingLeft: "10px"
      }}>
        
    <Typography ml="10px" mb="20px" fontSize="25px"  align ="left">
            Display Language
      </Typography> 
      <Divider />

      <Typography ml="20px" mt="10px" fontSize="15px" color="#fbfcca">
      Choose which language you want to use in the app.
      </Typography>
        <FormControl sx={{ m: 3,  color:"#e3dede" }} component="fieldset" variant="standard">
         <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={same} onChange={handleChangeForm} name="same" />
          }
          label="Same as device language"
        />
      <FormControlLabel
          control={
            <Checkbox checked={en} onChange={handleChangeForm} name="en" />
          }
          label="English (US)"
        />
        <FormControlLabel
          control={
            <Checkbox checked={ro} onChange={handleChangeForm} name="ro" />
          }
          label="Romana"
        />
      </FormGroup>
    </FormControl>
      
      <Divider />
      <CardActions >
      <Button size="small" variant="contained">Save changes</Button>
    </CardActions>
    </Box>
      </CardContent>
      </Card>
    </TabPanel>
    <TabPanel value={value} index={2}>
    <Card sx={{ width: '100%', minWidth:'560px',  flexDirection: "column"}}>
    <CardContent>
    <Box
      sx={{
        '& > :not(style)': { m: 1 }, 
        display: "flex",
        flexDirection: "column",
        paddingLeft: "10px"
      }}>
     
      <Typography ml="20px" fontSize="25px">
    Change password
      </Typography> 
      <Divider />
      
        <TextField
           label="Current Password"
           color="secondary"
           type="password"
           InputLabelProps={{
             sx: {
               color: "#8c8c8c",
             },
           }}
        />
        <TextField
           label="Enter Your New Password"
           color="secondary"
           type="password"
           id="password"
           error={error.password === "" ? false : true}
           helperText={error.password}
           onChange={(ev) => handleChangePass(ev, "password")}
           value={input.password}
           InputLabelProps={{
             sx: {
               color: "#8c8c8c",
             },
           }}
        />
        <TextField 
        label="Repeat New Password"
        color="secondary"
        error={error.confirmPassword === "" ? false : true}
        type="password"
        helperText={error.confirmPassword}
        onChange={(ev) => handleChangePass(ev, "confirmPassword")}
        value={input.confirmPassword}
        InputLabelProps={{
          sx: {
            color: "#8c8c8c",
          },
        }} />
      
    <Divider />
    <CardActions>
      <Button size="small"
      onClick={handleSubmitPass} variant="contained">Save changes</Button>
    </CardActions>
    </Box>
    </CardContent>
  </Card>
    </TabPanel>
    <TabPanel value={value} index={3}>
      Item Four
    </TabPanel>
    <TabPanel value={value} index={4}>
      Item Five
    </TabPanel>
    <TabPanel value={value} index={5}>
      Item Six
    </TabPanel>
    </Box>
  </Paper>
</PageLayout>
}

export default Settings;
