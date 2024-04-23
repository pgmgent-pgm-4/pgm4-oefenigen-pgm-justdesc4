import React, { useState, useEffect } from "react";
import Beer from "./Beer";
import SelectCountry from "./SelectCountry";

export default function Beers() {
  const [country, setCountry] = useState("italy");
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);
  const countries = [
    {
      name: "Italy",
      value: "italy",
    },
    {
      name: "Belgium",
      value: "belgium",
    },
    {
      name: "Sweden",
      value: "sweden",
    },
    {
      name: "Norway",
      value: "norway",
    },
  ];

  useEffect(() => {
    setLoading(true);
    const url = `https://beers-list.p.rapidapi.com/beers/${country}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_BEER_KEY,
        "X-RapidAPI-Host": "beers-list.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setBeers(data);
        setLoading(false);
      });
  }, [country]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SelectCountry
        countries={countries}
        setCountry={setCountry}
        country={country}
      />
      <h1>{country}</h1>

      {beers.map((beer, i) => (
        <Beer key={i} beer={beer} />
      ))}
    </div>
  );
}
