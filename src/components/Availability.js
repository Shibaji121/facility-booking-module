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
        <h1>Select Any of the Available Slot</h1>
        {console.log(slotAvailibilty[0].slots)}
        {slotAvailibilty[0].slots.map((slot, index) => {
          return (
            <div key={index}>
              <div>Timing : {slot?.time}</div>
              <div>Price Per Hour : {slot?.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Availability;
