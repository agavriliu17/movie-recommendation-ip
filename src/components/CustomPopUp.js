import React from "react"
import { useEffect, useState } from "react";
import popupStyles from "../css/CustomPopUp.css";
import PropTypes from "prop-types";

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
        opacity: show ? "1" : "0"
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
        <span className={popupStyles.close} onClick={closeHandler}>
          &times;
        </span>
        <div className={popupStyles.content}>{props.children}
              <div className={popupStyles.imgDiv}> 
              <div className={popupStyles.position}><div className={popupStyles.textAdded}>Added 14.04.2022</div></div>
              

              <div className={popupStyles.row} >
              <button type="submit">Play</button>
              <div className={popupStyles.text}>2h 14 min</div>
              <div className={popupStyles.textWithRectangle}>HD</div>
              </div>


              </div>
              <h1>WONDER WOMAN</h1>
              <h2>Characteristics. Wonder Woman is a compassionate caring, stubborn, opinionated, highly competitive, outgoing, immortal Amazon. Wonder Woman is a warrior born. She tries to avoid conflict but if pressed she will engage in battle and on occasion lose herself in the pleasure of battle.</h2>
              <hr />
              <h3>Did you like this movie? Please leave a rating before you go.</h3>
              <div className={popupStyles.images}>
                <img src="../pictures/tup.png" alt="tup" />
                <img src="../pictures/tdown.png" alt="tdown" />
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
