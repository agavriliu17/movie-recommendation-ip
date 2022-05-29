import React from "react";

import Typography from "@mui/material/Typography";
import PageLayout from "./PageLayout";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import UserAccount from "../components/settings/UserAccount";
import LanguagePreference from "../components/settings/LanguagePreference";
import ChangePassword from "../components/settings/ChangePassword";
import UserContext from "../resources/context/UserContext";

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
  const { userData } = React.useContext(UserContext);

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
            label="Password"
            id={1}
            sx={{
              color: "#fff",
              textTransform: "none",
              "&.Mui-selected": { color: "#F9F871" },
            }}
          />
          <Tab
            label="Display Language"
            id={2}
            sx={{
              color: "#fff",
              textTransform: "none",
              "&.Mui-selected": { color: "#F9F871" },
            }}
          />
        </Tabs>

        <TabPanel value={value} index={0}>
          <UserAccount userInfo={userData} />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <ChangePassword />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <LanguagePreference />
        </TabPanel>
      </Box>
    </PageLayout>
  );
};

export default Settings;
