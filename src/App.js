import React, { useState } from "react";
import "./App.css";
import Main from "./Main";
import Unoccupied from "./Unoccupied";
import Occupied from "./Occupied";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [slots, setSlots] = useState([
    { id: "1", time: "9 - 10 AM", occupied: false },
    { id: "2", time: "10 - 11 AM", occupied: false },
    { id: "3", time: "11-12 AM", occupied: false }
  ]);
  const [occupied, setOccupied] = useState([]);

  const handleOccupiedAdd = (el) => {
    const temp1 = [...occupied];
    temp1.push(el);
    const temp2 = [...slots];
    temp2.forEach((slot) => {
      if (slot.id === el.slotId) slot.occupied = true;
    });
    setOccupied(temp1);
    console.log(temp2);
    setSlots(temp2);
  };
  const handleOccupiedDelete = (slotId) => {
    const temp = [...occupied];
    setOccupied(temp.filter((el) => el.slotId !== slotId));
    const temp2 = [...slots];
    temp2.forEach((el) => {
      if (el.id === slotId) el.occupied = false;
    });
    console.log(temp2, slotId);
    setSlots(temp2);
  };
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/occupied">
            <Occupied
              slots={slots}
              occupied={occupied}
              handleOccupiedDelete={handleOccupiedDelete}
            />
          </Route>
          <Route path="/unoccupied">
            <Unoccupied
              slots={slots}
              handleOccupiedDelete={handleOccupiedDelete}
            />
          </Route>
          <Route path="/">
            <Main slots={slots} handleOccupiedAdd={handleOccupiedAdd} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
