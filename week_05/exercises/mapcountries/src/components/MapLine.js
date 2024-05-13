import { Source, Layer } from "react-map-gl";

function MapLine({ from, to }) {
  const data = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: [from, to],
    },
  };

  return (
    <Source type="geojson" data={data}>
      <Layer
        type="line"
        paint={{
          "line-color": "#ff0000",
          "line-width": 2,
        }}
      />
    </Source>
  );
}

export default MapLine;
