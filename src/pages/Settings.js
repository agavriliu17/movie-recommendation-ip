import React from "react";

import Typography from "@mui/material/Typography";
import PageLayout from "./PageLayout";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import GoogleIcon from "@mui/icons-material/Google";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { useNavigate } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      {...other}
      sx={{ width: "100%" }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

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

  return (
    <PageLayout>
      <Box sx={{ width: "100%" }}>
        <Typography align="left" variant="h4" sx={{ margin: "5vh 0px" }}>
          Settings
        </Typography>
      </Box>
      <Box sx={{ display: "flex", height: "100%", width: "100%" }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab
            label="Account"
            id={0}
            sx={{
              color: "#fff",
              textTransform: "none",
              "&.Mui-selected": { color: "#F9F871" },
            }}
          />
          <Tab
            label="Display Language"
            id={1}
            sx={{
              color: "#fff",
              textTransform: "none",
              "&.Mui-selected": { color: "#F9F871" },
            }}
          />
          <Tab
            label="Password"
            id={2}
            sx={{
              color: "#fff",
              textTransform: "none",
              "&.Mui-selected": { color: "#F9F871" },
            }}
          />
          <Tab
            label="Subscription"
            id={3}
            sx={{
              color: "#fff",
              textTransform: "none",
              "&.Mui-selected": { color: "#F9F871" },
            }}
          />
        </Tabs>

        <TabPanel value={value} index={0}>
          <Card
            sx={{
              minWidth: "275",
              width: "100%",
              bgcolor: "#1f1f1f",
              padding: "2rem",
            }}
          >
            <Typography align="left" variant="h4" mb="2rem">
              Account
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ marginLeft: "10px", marginBottom: "25px" }}
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Button variant="outlined" sx={{ textTransform: "none" }}>
                Upload
              </Button>
              <Button
                variant="outlined"
                sx={{ textTransform: "none" }}
                disabled
              >
                Remove
              </Button>
            </Stack>

            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <TextField
                  label="Username"
                  variant="filled"
                  InputLabelProps={{
                    sx: {
                      color: "#8c8c8c",
                    },
                  }}
                  onChange={handleChangeAccount}
                  sx={{ margin: "10px", width: "100%" }}
                />
                <TextField
                  label="Full Name"
                  variant="filled"
                  InputLabelProps={{
                    sx: {
                      color: "#8c8c8c",
                    },
                  }}
                  sx={{ margin: "10px", width: "100%" }}
                />
              </Box>
              <Divider sx={{ margin: "20px 10px" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <TextField
                  label="Email Address"
                  variant="filled"
                  InputLabelProps={{
                    sx: {
                      color: "#8c8c8c",
                    },
                  }}
                  sx={{ margin: "10px", width: "100%" }}
                />
                <TextField
                  label="Phone number"
                  variant="filled"
                  InputLabelProps={{
                    sx: {
                      color: "#8c8c8c",
                    },
                  }}
                  sx={{ margin: "10px", width: "100%" }}
                />
              </Box>
              <Divider sx={{ margin: "20px 10px" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "10px",
                }}
              >
                <Typography
                  align="left"
                  variant="h6"
                  color="#fff"
                  fontWeight="600"
                >
                  Linked Accounts
                </Typography>
                <Typography
                  align="left"
                  fontSize="15px"
                  color="#fff"
                  fontWeight="400"
                >
                  We use this to let you sign in and populate your profile
                  information
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: "15px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <GoogleIcon />
                    <Typography
                      align="left"
                      fontSize="15px"
                      color="#fff"
                      fontWeight="400"
                      ml="10px"
                    >
                      Sign in with Google
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    sx={{ textTransform: "none", marginRight: "10px" }}
                  >
                    Connect
                  </Button>
                </Box>
                <Divider sx={{ margin: "20px 10px" }} />

                <Typography
                  align="left"
                  variant="h6"
                  color="#fff"
                  fontWeight="600"
                >
                  Delete Account
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: "15px",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    align="left"
                    fontSize="15px"
                    color="#fff"
                    fontWeight="400"
                  >
                    By deleting your account you will lose all your data
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{ textTransform: "none", marginRight: "10px" }}
                    color="error"
                  >
                    Delete
                  </Button>
                </Box>
                <Divider sx={{ margin: "20px 10px" }} />
              </Box>
            </Box>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained">Save changes</Button>
            </CardActions>
          </Card>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Card
            sx={{
              minWidth: "275",
              width: "100%",
              bgcolor: "#1f1f1f",
              padding: "2rem",
            }}
          >
            <Typography align="left" variant="h4" mb="2rem">
              Display Language
            </Typography>
            <Typography ml="20px" mt="10px" fontSize="15px" color="#fff">
              Choose which language you want to use in the app.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
              }}
            >
              <FormControl
                sx={{ m: 3 }}
                component="fieldset"
                variant="standard"
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={same}
                        onChange={handleChangeForm}
                        name="same"
                        sx={{ color: "#fff" }}
                      />
                    }
                    label="Same as device language"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={en}
                        onChange={handleChangeForm}
                        name="en"
                        sx={{ color: "#fff" }}
                      />
                    }
                    label="English (US)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={ro}
                        onChange={handleChangeForm}
                        name="ro"
                        sx={{ color: "#fff" }}
                      />
                    }
                    label="Romana"
                  />
                </FormGroup>
              </FormControl>
            </Box>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained">Save changes</Button>
            </CardActions>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Card
            sx={{
              minWidth: "275",
              width: "100%",
              bgcolor: "#1f1f1f",
              padding: "2rem",
            }}
          >
            <Typography align="left" variant="h4" mb="2rem">
              Password
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column" }}
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
                sx={{ margin: "10px 0px" }}
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
                sx={{ margin: "10px 0px" }}
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
                }}
                sx={{ margin: "10px 0px" }}
              />
            </Box>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained" onClick={handleSubmitPass}>
                Save changes
              </Button>
            </CardActions>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Card
            sx={{
              minWidth: "275",
              width: "100%",
              bgcolor: "#1f1f1f",
              padding: "2rem",
            }}
          >
            <Typography align="left" variant="h4" mb="5rem">
              Subscription
            </Typography>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained" onClick={handleSubmitPass}>
                Save changes
              </Button>
            </CardActions>
          </Card>
        </TabPanel>
      </Box>
    </PageLayout>
  );
};

export default Settings;
