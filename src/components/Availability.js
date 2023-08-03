import React from "react";
import { useParams } from "react-router-dom";
import facilitiesAvailable from "../config/AvailableFacility";

function Availability() {
  const { facilityName } = useParams();
  const slotAvailibilty = facilitiesAvailable.filter((facility) => {
    return facility.name === facilityName;
  });

  return (
    <div>
      <h1 className="txt-center">Selected Facility is: {facilityName}</h1>
      <div>
        <h1 className="txt-center">Available Slots and Prices are : </h1>
        <div className="slot-container">
          {slotAvailibilty[0]?.slots.map((slot, index) => {
            return (
              <div className="slots" key={index}>
                <div className="slot-timing">Timing : {slot?.time}</div>
                <div className="slot-price">
                  Price Per Hour : {slot?.price}rs
                </div>
              </div>
            );
          })}
        </div>
        <div className="details">
          <label>Enter The Start Time in 24hr format</label>
          <input type="number" />
          <label>Enter The Exit Time in 24hr format</label>
          <input type="number" />
          <button type="submit">Confirm Booking</button>
        </div>
      </div>
    </div>
  );
}

export default Availability;
