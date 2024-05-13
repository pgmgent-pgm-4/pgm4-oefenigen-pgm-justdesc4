import React from "react";

export default function ParkingGarage({ parkings }) {
  return (
    <div>
      <ul>
        {parkings.map((parking) => (
          <li key={parking.id}>{parking.name}</li>
        ))}
      </ul>
    </div>
  );
}
