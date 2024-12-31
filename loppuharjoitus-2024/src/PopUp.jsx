import React from "react";
import Popup from "reactjs-popup";

function PopUp({ isOpen, togglePopup, message }) {
  return (
    <>
      {isOpen && (
        <Popup open={isOpen} onClose={togglePopup}>
          <div className="popup">
            <p>{message}</p>
            <button onClick={togglePopup}>Close</button>
          </div>
        </Popup>
      )}
    </>
  );
}

export default PopUp;
