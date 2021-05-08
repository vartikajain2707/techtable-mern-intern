import React from "react";
import CardUnit from "./CardUnit";
import "./Occupied.css";
import { Link } from "react-router-dom";

function Occupied(props) {
  return (
    <div className='occupied'>
      <h1>Occupied Slots</h1>
      <div className="occupied__button">
        <Link to="/unoccupied">
            <button> Unoccupied</button></Link>
        <Link to="/">
            <button>Booking Form</button> </Link>
      </div>
      {props.occupied.map((el) => {    
        const time = props.slots.filter((slot) => slot.id === el.slotId)[0];
        console.log("time", time);
        return (
          <CardUnit
            slotTime={time}
            unOccupy={props.handleOccupiedDelete}
            slotId={el.slotId}
            fullName={el.fullName}
            carNumber={el.carNumber}
            phoneNumber={el.phoneNumber}
          />
        );
      })}
      
    </div>
  );
}

export default Occupied;
