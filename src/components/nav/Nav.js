import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountMenu from "./AccountMenu";
import UserContext from "../../resources/context/UserContext";

import { useNavigate } from "react-router-dom";

const pages = { home: "Home", my_list: "My list" };

const transparentNavStyle = {
  backgroundColor: "transparent",
  backgroundImage:
    "linear-gradient(to bottom,rgba(0,0,0,.6) 10%,rgba(0,0,0,0))",
  zIndex: 1100,
  boxShadow: "none",
  transitionTimingFunction: "ease !important",
  transition: "0.5s",
  transitionDelay: "0s",
  ".MuiAppBar-root": { backgroundColor: "#000000" },
};

const blackNavStyle = {
  transitionTimingFunction: "ease !important",
  transitionProperty: "background-color !important",
  transition: "0.5s",
  backgroundColor: "#000000",
  transitionDelay: "0s",
};

const Nav = () => {
  const [show, handleShow] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { userData } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const goToMovie = (pageRoute) => {
    navigate(`/IP-Movie-streaming-website/${pageRoute}`);
  };

  console.log(userData);
  return (
    <AppBar sx={show ? blackNavStyle : transparentNavStyle}>
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: "none", md: "flex" }, ml: "20px" }}
        >
          LOGO
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {Object.keys(pages).map((page) => (
              <MenuItem
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ textTransform: "none" }}
              >
                <Typography textAlign="center">{pages[page]}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {Object.keys(pages).map((page) => (
            <Button
              key={page}
              onClick={() => goToMovie(page)}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textTransform: "none",
              }}
            >
              {window.location.pathname === `/${page}` ? (
                <Typography fontWeight={700}>{pages[page]}</Typography>
              ) : (
                pages[page]
              )}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0, mr: "20px" }}>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
            </Tooltip>
            <Typography ml="10px">{userData.username}</Typography>
          </Box>
          <AccountMenu
            anchorEl={anchorElUser}
            handleClose={handleCloseUserMenu}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Nav;
