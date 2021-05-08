import React from "react";
import Slot from "./Slot";
import "./Unoccupied.css";
import { Link } from "react-router-dom";

function Unoccupied(props) {
  return (
    <div className="unoccupied__slots">
        
      <h1 className="unoccupied">Unoccupied Slots</h1>
      <div className="unoccupied__button">
        <Link to="/occupied">
            <button> Occupied</button></Link>
        <Link to="/">
            <button>Booking Form</button> </Link>
      </div>
      {props.slots.map((el) => !el.occupied && <Slot slotTime={el.time} />)}
      
      
    </div>
  );
}

export default Unoccupied;
