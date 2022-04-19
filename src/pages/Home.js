import React from "react";
import "./HomePage/Home.css";
import List from "./HomePage/List"


function Home () {
  return (
 <div className="home">
 <List title="Continue Watching"/>
 <List title="For You"/>
 <List title="Just Added"/>
 <List title="Popular"/>
 <List title="Action"/>
 <List title="Comedy"/>
 </div>
  )
};

export default Home;
