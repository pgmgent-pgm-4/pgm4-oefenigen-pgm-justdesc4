import React from "react";
import { useState, useEffect } from "react";

export default function ParkingGaragesRealtime() {
  const [parkings, setParkings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&facet=description"
    )
      .then((response) => response.json())
      .then((data) => {
        setParkings(data.records);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <ul>
        {parkings.map((parking) => (
          <li key={parking.id}>{parking.fields.name}</li>
        ))}
      </ul>
    </div>
  );
}
