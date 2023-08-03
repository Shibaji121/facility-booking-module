import React from "react";
import facilitiesAvailable from "../config/AvailableFacility";
import { Link } from "react-router-dom";

function Facilities() {
  return (
    <div>
      <h1 className="txt-center" style={{ color: "maroon" }}>
        Select any Facilility to Book
      </h1>
      <div className="facility-container">
        {facilitiesAvailable.map((facility, index) => {
          return (
            <Link key={index} to={`facility/${facility.name}`}>
              <div className="facility-name">{facility.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Facilities;
