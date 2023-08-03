import React from "react";
import facilitiesAvailable from "../config/AvailableFacility";

function Facilities() {
  return (
    <div className="facility-container">
      {facilitiesAvailable.map((facility) => {
        return <div className="facility-name">{facility.name}</div>;
      })}
    </div>
  );
}

export default Facilities;
