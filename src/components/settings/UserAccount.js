import React from "react";

import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import GoogleIcon from "@mui/icons-material/Google";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import { useSnackbar } from "notistack";

import { validateEmail, updateUser } from "../../resources/helpers/authHelper";

const UserAccount = ({ userInfo }) => {
  const [loading, setLoading] = React.useState(false);
  const [input, setInput] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
  });
  const [error, setError] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
  });
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    if (userInfo)
      setInput({
        firstName: userInfo?.firstname,
        lastName: userInfo?.lastname,
        email: userInfo?.email,
        username: userInfo?.username,
      });
  }, [userInfo]);

  const handleChangeInput = (event, key) => {
    setInput({ ...input, [key]: event.target.value });
  };

  const handleSave = async () => {
    const firstNameError =
      input.firstName === "" ? "Please provide your first name" : "";

    const lastNameError =
      input.lastName === "" ? "Please provide your last name" : "";

    const emailError =
      input.email === "" || !validateEmail(input.email)
        ? "Please provide an valid email"
        : "";

    const usernameError =
      input.username < 4 ? "Please provide a valid username" : "";

    const confirmPasswordError =
      input.confirmPassword !== input.password
        ? "The password provided does not match"
        : "";

    if (
      firstNameError === "" &&
      lastNameError === "" &&
      emailError === "" &&
      usernameError === "" &&
      confirmPasswordError === ""
    ) {
      setLoading(true);
      try {
        setError({
          firstName: firstNameError,
          lastName: lastNameError,
          email: emailError,
          username: usernameError,
          confirmPassword: confirmPasswordError,
        });
        const response = await updateUser(input, userInfo.id);
        if (response) {
          enqueueSnackbar("Account details updated successfully!", {
            variant: "success",
          });
        }
      } catch (e) {
        setLoading(false);
        enqueueSnackbar(e.message, { variant: "error" });
      }
    } else
      setError({
        firstName: firstNameError,
        lastName: lastNameError,
        email: emailError,
        username: usernameError,
        confirmPassword: confirmPasswordError,
      });
  };

  return (
    <Card
      sx={{
        minWidth: "275",
        width: "100%",
        bgcolor: "#1f1f1f",
        padding: "2rem",
      }}
    >
      <Typography component={"span"} align="left" variant="h4" mb="2rem">
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
        <Button variant="outlined" sx={{ textTransform: "none" }} disabled>
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
            onChange={(event) => handleChangeInput(event, "lastName")}
            value={input.lastName}
            helperText={error.lastName}
            error={error.lastName === "" ? false : true}
            label="Last Name"
            variant="filled"
            InputLabelProps={{
              sx: {
                color: "#8c8c8c",
              },
            }}
            sx={{ margin: "10px", width: "100%" }}
          />
          <TextField
            onChange={(event) => handleChangeInput(event, "firstName")}
            value={input.firstName}
            helperText={error.firstName}
            error={error.firstName === "" ? false : true}
            label="First Name"
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
            onChange={(event) => handleChangeInput(event, "email")}
            value={input.email}
            helperText={error.email}
            error={error.email === "" ? false : true}
            variant="filled"
            InputLabelProps={{
              sx: {
                color: "#8c8c8c",
              },
            }}
            sx={{ margin: "10px", width: "100%" }}
          />
          <TextField
            label="Username"
            onChange={(event) => handleChangeInput(event, "username")}
            value={input.username}
            helperText={error.username}
            error={error.username === "" ? false : true}
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
            component={"span"}
          >
            Linked Accounts
          </Typography>
          <Typography
            align="left"
            fontSize="15px"
            color="#fff"
            fontWeight="400"
            component={"span"}
          >
            We use this to let you sign in and populate your profile information
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
                component={"span"}
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
            component={"span"}
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
              component={"span"}
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
        <Button variant="contained" onClick={handleSave} disabled={loading}>
          Save changes
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserAccount;
