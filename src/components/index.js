import { useEffect, useState } from "react";
import popupStyles from "./custom-popup.module.css";
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
        opacity: show ? "1" : "0",
        display: show ? "contents" : "none"
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
        <span className={popupStyles.close} onClick={closeHandler}>
          &times;
        </span>
        <div className={popupStyles.content}>{props.children}
              <h2>Select some title you like so we can show you the best movies we've got!</h2>
              <div className={popupStyles.images}>
                <img src="/movieCarusel1.png" alt="movieCarusel1" />
                <img src="/movieCarusel2.png" alt="movieCarusel2" />
                <img src="/movieCarusel3.png" alt="movieCarusel3" />
              </div> 
              <div className={popupStyles.row} >
                <button type="submit">Save</button>
                <button type="submit">Skip</button>
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
