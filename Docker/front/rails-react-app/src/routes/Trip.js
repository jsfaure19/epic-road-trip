import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import Grid from "@mui/material/Grid";
import React from "react";

import RoutingMachine from "../components/RoutingMachine";
import ERTStepper from "../components/ERTStepper";
import L from "leaflet";

const Trip = () => {
  const [departure, setDeparture] = React.useState({
    cityName: "Paris",
    lat: 48.862725,
    long: 2.287592,
  });
  const [arrival, setArrival] = React.useState({
    cityName: "Dijon",
    lat: 47.3215806,
    long: 5.0414701,
  });
  const [waypoints, setWaypoints] = React.useState([
    {
      id: 0,
      cityName: "Toulouse",
      lat: 43.6044622,
      long: 1.4442469,
      disabled: true,
    },
    {
      id: 1,
      cityName: "Perpignan",
      lat: 42.6985304,
      long: 2.8953121,
      disabled: false,
    },
  ]);
  const [map, setMap] = React.useState(null);
  const [instance, setInstance] = React.useState();
  const routingMachineRef = React.useRef();
  const pluginRef = React.useRef();

  const renderWaypoints = () => {
    let finalWaypoints = [];
    finalWaypoints.push(L.latLng(departure.lat, departure.long));
    waypoints.forEach((waypoint) => {
      if (!waypoint.disabled)
        finalWaypoints.push(L.latLng(waypoint.lat, waypoint.long));
    });
    finalWaypoints.push(L.latLng(arrival.lat, arrival.long));
    return finalWaypoints;
  };

  React.useEffect(() => {
    if (!map) return;
    const controlContainer = routingMachineRef.current.onAdd(map);
    pluginRef.current.appendChild(controlContainer);
  }, [map]);

  React.useEffect(() => {
    console.log("toto");
    if (routingMachineRef.current) {
      routingMachineRef.current.setWaypoints(renderWaypoints());
    }
  }, [waypoints, routingMachineRef]);

  const HandlingMapComponent = () => {
    const localMap = useMap();
    setMap(localMap);
  };

  const updateWaypoints = (waypointId) => {
    const localWaypoints = [...waypoints];
    waypoints.forEach((waypoint) => {
      if (waypoint.id === waypointId) {
        waypoint.disabled = !waypoint.disabled;
      }
    });
    setWaypoints(localWaypoints);
  };

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={4}
          container
          style={{ border: "1px solid black" }}
          sx={{ maxHeight: "100vh", overflow: "scroll", flexWrap: "wrap" }}
        >
          <Grid sx={{ height: "30%" }} item container>
            <ERTStepper
              departure={departure}
              arrival={arrival}
              waypoints={waypoints}
              handleChange={updateWaypoints}
            />
          </Grid>
          <Grid
            item
            container
            style={{ border: "1px solid black" }}
            ref={pluginRef}
          />
        </Grid>
        <Grid item xs={8}>
          <MapContainer
            id="mapId"
            zoom={14}
            center={[33.5024, 36.2988]}
            style={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}
          >
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
            />
            <HandlingMapComponent />
            <RoutingMachine
              ref={routingMachineRef}
              departure={departure}
              arrival={arrival}
              waypoints={waypoints}
            />
          </MapContainer>
        </Grid>
      </Grid>

      {/* </Grid> */}
    </>
  );
};

export default Trip;
