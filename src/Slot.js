import React from "react";
import "./Slot.css";

function Slot(props) {
  return (
    <div>
      <p className="slot__book">Slot Time: {props.slotTime} </p>
    </div>
  );
}

export default Slot;
