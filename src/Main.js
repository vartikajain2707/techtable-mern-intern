import React from "react";
import { useForm } from "react-cool-form";
import "./Main.css";
import { Link, Redirect } from "react-router-dom";


const Field = ({ label, id, error, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
    {error && <p>{error}</p>}
  </div>
);
function Main(props) {
  const [redirect, setRedirect] = React.useState(false);
  const { form, mon } = useForm({
    
    defaultValues: { fullName: "", carNumber: "", phoneNumber: "", slotId: "" },
    onSubmit: (values) => {
      console.log(values);
      props.handleOccupiedAdd({
        fullName: values.fullName,
        carNumber: values.carNumber,
        phoneNumber: values.phoneNumber,
        slotId: values.slotId
      });
      setRedirect(true);
    }
  });
  const errors = mon("errors", { errorWithTouched: true });
  

  return (
    <div className="main">
      {redirect && <Redirect to="/occupied" />}
      <h1>Book Your Slot</h1>
      <div className="button">
        <Link to="/occupied">
          <button>Occupied Slots</button>
        </Link>
        <Link to="/unoccupied">
          <button>Unoccupied Slots</button>
        </Link>
      </div>
      <div>
        <form ref={form} noValidate>
          <Field
            label="Full Name"
            id="Fullname"
            name="fullName"
            required
            error={errors.fullName}
          />
          <Field
            label="Car Number"
            id="carnumber"
            name="carNumber"
            type="carnumber"
            required
            maxLength={10}
            minLength={10}
            error={errors.carNumber}
          />
          <Field
            label="Phone Number"
            id="phone"
            name="phoneNumber"
            type="phone"
            required
            maxLength={10}
            error={errors.phoneNumber}
          />
          <label>Time Slot</label>
          <select className="select__option" name="slotId">
            {props.slots.map(
              (el) => !el.occupied && <option value={el.id}>{el.time}</option>
            )}
          </select>
          <input type="submit" value="Book" />
        </form>
      </div>
    </div>
  );
}

export default Main;
