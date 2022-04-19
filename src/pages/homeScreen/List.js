import { ArrowBackIosOutlined,ArrowForwardIosOutlined } from '@mui/icons-material';
import React from 'react'
import "./List.css"
import Item from "./Item"

function List({title}){
    return(
        <div className="list">
            <span className="listTitle">{title}</span>
             <div className="wrapper">
                 <ArrowBackIosOutlined className="sliderArrowLeft"
                 sx={{
                    width:"50px",
                    height: "100%",
                 }}/>
               <div className="container">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
               </div>
                 <ArrowForwardIosOutlined  className="sliderArrowRight"
                  sx={{
                    width:"50px",
                    height: "100%",
                 }}/>
             </div>
        </div>
    )
}
export default List;