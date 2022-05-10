import React from "react";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PageLayout from "./PageLayout";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";


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
}

  
const Settings = () => {

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
  return <PageLayout>
    <Paper sx={{width: '100%', height: '100%',position: 'absolute',top: 0, left: 0 }}>
      <Typography ml="20px" fontSize="25px" mt={10}>
          Settings
        </Typography>
        <Box
      sx={{display: 'flex', height: '100%'}}
    >
        <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Account" {...a11yProps(0)} />
        <Tab label="Display Language" {...a11yProps(1)} />
        <Tab label="Password" {...a11yProps(2)} />
        <Tab label="Subscription" {...a11yProps(3)} />
        <Tab label="Help" {...a11yProps(4)} />
        <Tab label="Privacy & Terms" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <Card sx={{ minWidth: '275' }}>
      <CardContent>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-name"
            label="Display name"
            value={name}
            onChange={handleChangeAccount}
          />
          <TextField id="outlined-uncontrolled" label="Full name" />
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Save changes</Button>
      </CardActions>
    </Card>      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography ml="20px" fontSize="25px">
      Display Language
        </Typography> 
        <Typography ml="20px" mt="10px" fontSize="15px">
        Choose which language you want to use in the app.
        </Typography>
        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}>
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
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Card sx={{ minWidth: '275' }}>
      <CardContent>
        <Box
          sx={{
            '& > :not(style)': { m: 1, width: '25ch'
          },
          }}
          flexDirection= "row"
          autoComplete="off"
        >
          <TextField
             label="Current Password"
             type="password"
             variant="filled"
             InputLabelProps={{
               sx: {
                 color: "#8c8c8c",
               },
             }}
          />
          <TextField
             label="New Password"
             type="password"
             error={error.password === "" ? false : true}
             helperText={error.password}
             id="password"
             onChange={(ev) => handleChangePass(ev, "password")}
             value={input.password}
             variant="filled"
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
          variant="filled"
          InputLabelProps={{
            sx: {
              color: "#8c8c8c",
            },
          }} />
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small"
        onClick={handleSubmitPass}>Save changes</Button>
      </CardActions>
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
  </PageLayout>;
};

export default Settings;
