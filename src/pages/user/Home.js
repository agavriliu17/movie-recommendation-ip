import React from "react";
import Nav from "./../../components/Nav";
import Banner from "../../components/Banner";
import List from "../HomePage/List";
import Paper from "@mui/material/Paper";

const Home = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        minHeight: "100vh",
        borderRadius: "0px",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Nav />
      <Banner/>
      <List title="Continue Watching"/>
      <List title="For You"/>
      <List title="Popular"/>
      <List title="Action"/>
      <List title="Drama"/>
      
      {/*Sections*/}
    </Paper>
  );
};

export default Home;
