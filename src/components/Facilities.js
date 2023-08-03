import React from "react";
import facilitiesAvailable from "../config/AvailableFacility";
import { Link } from "react-router-dom";

function Facilities() {
  return (
    <div className="facility-container">
      {facilitiesAvailable.map((facility) => {
        return (
          <Link to={`facility/${facility.name}`}>
            <div className="facility-name">{facility.name}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default Facilities;
