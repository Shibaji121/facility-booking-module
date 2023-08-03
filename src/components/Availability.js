import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import facilitiesAvailable from "../config/AvailableFacility";

function Availability() {
  const [strTime, setStrTime] = useState(0);
  const [extTime, setExtTime] = useState(24);
  const [bookings, setBookings] = useState([]);

  const { facilityName } = useParams();
  const slotAvailibilty = facilitiesAvailable.filter((facility) => {
    return facility.name === facilityName;
  });

  const isAlreadyBooked = (startTime, endTime) => {
    let flag = false;
    bookings?.forEach((item) => {
      const timeArray = item.time.split(" - ");
      const slotStartTime = parseInt(timeArray[0].split(":")[0]);
      const slotEndTime = parseInt(timeArray[1].split(":")[0]);

      if (startTime <= slotEndTime && endTime >= slotStartTime) {
        flag = true;
        return true;
      }
    });
    return flag;
  };

  const calculatePrice = (startTime, endTime) => {
    let totalPrice = 0;
    slotAvailibilty[0]?.slots.forEach((item) => {
      const timeArray = item.time.split(" - ");
      const slotStartTime = parseInt(timeArray[0].split(":")[0]);
      const slotEndTime = parseInt(timeArray[1].split(":")[0]);

      if (startTime <= slotEndTime && endTime >= slotStartTime) {
        const overlapStart = Math.max(startTime, slotStartTime);
        const overlapEnd = Math.min(endTime, slotEndTime);
        const overlapDuration = overlapEnd - overlapStart;

        const slotPricePerHour = item.price;
        const overlapPrice = overlapDuration * slotPricePerHour;

        totalPrice += overlapPrice;
      }
    });

    return totalPrice;
  };

  const handleBooking = () => {
    if (strTime < 0 || extTime < 0) {
      alert("Start and Exit Time Should be greater than 0");
      return;
    } else if (strTime === "" || extTime === "") {
      alert("Please Enter the Correct value in Start and Exit Time field");
      return;
    } else if (strTime > 24 || extTime > 25) {
      alert("Start time and Exit time should be 00 to 24");
      return;
    } else if (strTime >= extTime) {
      alert("Start Time Should be less than Exit Time");
      return;
    } else if (isAlreadyBooked(strTime, extTime)) {
      alert("Booking Failed, Already Booked");
      return;
    }
    const price = calculatePrice(strTime, extTime);
    const bookingSlot = { time: `${strTime}:00 - ${extTime}:00` };
    setBookings([...bookings, bookingSlot]);
    alert(`Booked, Rs  ${price}`);
  };

  return (
    <div>
      <Link to={"/"}>
        <h3 style={{ margin: 0, border: "1px solid black", width: "10vw" }}>
          BACK TO Home Page
        </h3>{" "}
      </Link>
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
          <input
            type="number"
            value={strTime}
            onChange={(e) => setStrTime(e.target.value)}
          />
          <label>Enter The Exit Time in 24hr format</label>
          <input
            type="number"
            value={extTime}
            onChange={(e) => setExtTime(e.target.value)}
          />
          <button type="submit" onClick={handleBooking}>
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default Availability;
