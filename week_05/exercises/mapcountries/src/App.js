import * as React from "react";
import Map from "react-map-gl";
import CountrySelector from "./components/CountrySelector";
import MapLine from "./components/MapLine";

function App() {
  const [data, setData] = React.useState(null);
  const [selectedCountry, setSelectedCountry] = React.useState(null);

  const myLocation = [3.7317757976322627, 51.04172577328023];

  React.useEffect(() => {
    fetch("https://www.pgm.gent/pgm-4/data/countries.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleCountrySelect = (index) => {
    setSelectedCountry(data[index]);
  };

  return (
    <div>
      {data && (
        <CountrySelector
          countries={data}
          onCountrySelect={handleCountrySelect}
        />
      )}
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAP_TOKEN}
        initialViewState={{
          longitude: myLocation[0],
          latitude: myLocation[1],
          zoom: 14,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {selectedCountry && (
          <MapLine
            from={myLocation}
            to={[selectedCountry.longitude, selectedCountry.latitude]}
          />
        )}
      </Map>
    </div>
  );
}

export default App;
