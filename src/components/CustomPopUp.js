import React from "react"
import { useEffect, useState } from "react";
import "../css/CustomPopUp.css";
import PropTypes from "prop-types";
import r1 from "../pictures/tup.png";
import r2 from "../pictures/tdown.png";



const CustomPopup = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
        display: show ? "contents" : "none"
      }}
      className="overlay"
    >
      <div className="popup">
        <span className="close" onClick={closeHandler}>
          &times;
        </span>
        <div className="content">{props.children}
              <div className="imgDiv" sx={{backgroundImage:props.image}}> 
              <div className="position"><div className="textAdded">Added 14.04.2022</div></div>
              

              <div className="row" >
              <button type="submit">Play</button>
              <div className="text">{props.duration}</div>
              <div className="textWithRectangle">HD</div>
              </div>


              </div>
              <h1>{props.title}</h1>
              <h2 >Characteristics. Wonder Woman is a compassionate caring, stubborn, opinionated, highly competitive, outgoing, immortal Amazon. Wonder Woman is a warrior born. She tries to avoid conflict but if pressed she will engage in battle and on occasion lose herself in the pleasure of battle.</h2>
              <hr />
              <h3>Did you like this movie? Please leave a rating before you go.</h3>
              <div className="images">
                <img src={r1} alt="tup" />
                <img src={r2} alt="tdown" />
              </div> 
            

        </div>
      </div>
    </div>
  );
};

CustomPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default CustomPopup;
