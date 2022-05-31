import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Header = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className="header"
    >
      <div className="header-inner">
        <div className="logo">LOGO</div>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Button
            variant="text"
            component={motion.div}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            sx={{
              textTransform: "none",
              fontSize: "20px",
              color: "#fff",
              height: "fit-content",
              "@media screen and (max-width:400px)": {
                fontSize: "15px",
              },
            }}
            onClick={() => navigate("/login")}
          >
            Log in
          </Button>
          <Typography
            color="#fff"
            fontSize="14px"
            ml="5px"
            mr="5px"
            sx={{
              "@media screen and (max-width:400px)": {
                fontSize: "10px",
              },
            }}
          >
            or
          </Typography>
          <Button
            variant="text"
            component={motion.div}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            sx={{
              textTransform: "none",
              fontSize: "20px",
              color: "#fff",
              "@media screen and (max-width:400px)": {
                fontSize: "15px",
              },
            }}
            onClick={() => navigate("/register")}
          >
            Sign up
          </Button>
        </Box>
      </div>
    </motion.div>
  );
};

export default Header;
