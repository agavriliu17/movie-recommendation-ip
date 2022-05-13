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
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import React, { useState } from "react";



import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { ForkRight } from "@mui/icons-material";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
    <Card sx={{ width: '100%', minWidth:'530px' }}>
    <CardContent>
    <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 }
        }}
        noValidate
        autoComplete="off"
      >
    <Typography ml="10px" mb="20px" fontSize="25px"  align ="left">
    Account
    </Typography> 
    <Divider />
    <Stack paddingTop="10px" direction="row" alignItems="center" spacing={2} > 
    <Box>
    {selectedImage && (
        <Avatar sx={{mb:"20px", mt:"20px", width:"50px", height:"50px"}} alt="not fount"  src={URL.createObjectURL(selectedImage)} />
      )}
    <Button sx={{mr:"20px"}} variant="contained" onClick={()=>setSelectedImage(null)}>Remove</Button>

    <Button
  variant="contained"
  component="label"
>
Upload File
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
      
     
     
  
    </Box>
  </Stack>
        <TextField
          id="outlined-name"
          label="Display name"
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
        InputLabelProps={{
          sx: {
            color: "#8c8c8c",
          },
        }} />
        <Divider />
        <TextField  
        id="outlined-uncontrolled" 
        label="Email address" 
        InputLabelProps={{
          sx: {
            color: "#8c8c8c",
          },
        }} />
        <TextField  
        id="outlined-uncontrolled" 
        label="Phone number" 
        InputLabelProps={{
          sx: {
            color: "#8c8c8c",
          },
        }} />
        <Divider />
      <CardActions>
       <Button size="small" variant="contained">Save changes</Button>
    </CardActions>
    </Box>
    </CardContent>
  </Card>   
  </TabPanel>
    <TabPanel value={value} index={1}>
    <Card sx={{ width: '100%', minWidth:'530px'}}>
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

      <Typography ml="20px" mt="10px" fontSize="15px">
      Choose which language you want to use in the app.
      </Typography>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
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
      <Button size="small" variant="contained" >Save changes</Button>
    </CardActions>
    </Box>
      </CardContent>
      </Card>
    </TabPanel>
    <TabPanel value={value} index={2}>
    <Card sx={{ width: '100%', minWidth:'530px',  flexDirection: "column"}}>
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
           type="password"
           InputLabelProps={{
             sx: {
               color: "#8c8c8c",
             },
           }}
        />
        <TextField
           label="New Password"
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
        label="Confirm Password"
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
