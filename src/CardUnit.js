import React from "react";
import "./CardUnit.css";

function CardUnit(props) {
  const handleSlotUnbook = () => {
    props.unOccupy(props.slotId);
  };
  return (
    <div className="card">
      <h3>{props.fullName}</h3>
      <h6>
        <small>Car Number: </small>
        {props.carNumber}
      </h6>
      <h6>
        <small>Slot: </small>
        {props.slotTime.time}
      </h6>
      <button onClick={handleSlotUnbook}>Unbook!</button>
    </div>
  );
}

export default CardUnit;
