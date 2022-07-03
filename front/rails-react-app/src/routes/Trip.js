import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import Grid from "@mui/material/Grid";
import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import RoutingMachine from "../components/RoutingMachine";
import ERTStepper from "../components/ERTStepper";
import ERTPoiSelector from "../components/ERTPoiSelector";
import L from "leaflet";
import { IconButton } from "@mui/material";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";

const Trip = () => {

  // const [departure, setDeparture] = React.useState({});
  // const [arrival, setArrival] = React.useState({});
  // const [waypoints, setWaypoints] = React.useState([]);

  const [departure, setDeparture] = React.useState({
    id: 0,
    cityName: "Paris",
    lat: 48.862725,
    long: 2.287592,
    poi: [],
  });
  const [arrival, setArrival] = React.useState({
    id: 1,
    cityName: "Dijon",
    lat: 47.3215806,
    long: 5.0414701,
    poi: [],
  });

  const [waypoints, setWaypoints] = React.useState([
    {
      id: 2,
      cityName: "Toulouse",
      lat: 43.6044622,
      long: 1.4442469,
      disabled: true,
      poi: [],
    },
    {
      id: 3,
      cityName: "Perpignan",
      lat: 42.6985304,
      long: 2.8953121,
      disabled: false,
      poi: [],
    },
  ]);

  const pluginRef = React.useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [map, setMap] = React.useState(null);
  const [instance, setInstance] = React.useState();
  const [locomotionType, setLocomotionType] = React.useState("car");
  const [selectedPoint, setSelectedPoint] = React.useState({});
  const routingMachineRef = React.useRef();

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

  // React.useEffect(() => {
  //   if(location.state.arrival != '' && location.state.departure != ''){
  //    const arr = location.state.arrival;
  //     const dep = location.state.departure;
  //     const bis = {
  //       id:'998',
  //       cityName: arr.label,
  //       lat: arr.lat,
  //       long: arr.lon,
  //       disabled:false,
  //       poi:[],
  //     };
  //     const localDeparture = {
  //       id:'999',
  //       cityName: dep.label,
  //       lat: dep.lat,
  //       long: dep.lon,
  //       disabled:false,
  //       poi:[],
  //     }
  //     setArrival(bis)
  //     setDeparture(localDeparture)
  //   }else{
  //     navigate('/homepage')
  //   }
  // }, []);

  React.useEffect(() => {
    if (!map) return;
    const controlContainer = routingMachineRef.current.onAdd(map);
    pluginRef.current.appendChild(controlContainer);
  }, [map]);

  React.useEffect(() => {
    if (routingMachineRef.current) {
      routingMachineRef.current.setWaypoints(renderWaypoints());
    }
  }, [waypoints, routingMachineRef,departure, arrival]);

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

  const addWaypoint= (newWaypoint) => {
    const localWaypoints = [...waypoints];
    const newWayp = { id:localWaypoints.length+1,
                cityName: newWaypoint.label,
              lat: newWaypoint.lat,
              long: newWaypoint.lon,
              disabled:false,
              poi:[],}
              localWaypoints.push(newWayp)
              setWaypoints(localWaypoints)
  }

  const handleSelectedPointChange = (point) => {
    setSelectedPoint(point);
  };
  const handleChangePOI = (point, POI) => {
    if (point.id === departure.id) {
      const localDeparture = { ...departure };
      localDeparture.poi.push(POI);
    } else if (point.id === arrival.id) {
      const localArrival = { ...departure };
      localArrival.poi.push(POI);
    } else {
      const localWaypoints = [...waypoints];
      const res = localWaypoints.find((wayp) => wayp.id === point.id);
      res.poi.push(POI);
      setWaypoints(localWaypoints);
    }
  };

  const closePOISelector = () => {
    setSelectedPoint({});
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
            {selectedPoint.id || selectedPoint.id === 0 ? (
              <ERTPoiSelector
                selectedPoint={selectedPoint}
                onChange={handleChangePOI}
                onClose={closePOISelector}
              />
            ) : (
              <ERTStepper
                departure={departure}
                arrival={arrival}
                waypoints={waypoints}
                handleChange={updateWaypoints}
                addWaypoint={addWaypoint}
              />
            )}
          </Grid>
          <Grid
            item
            container
            style={{ border: "1px solid black" }}
            ref={pluginRef}
          />
        </Grid>
        <Grid item xs={8}>
          <Grid
            container
            sx={{
              position: "absolute",
              right: 20,
              top: 20,
              zIndex: 999,
              width: 200,
              justifyContent: "space-between",
              backgroundColor: "white",
              py: 1,
              px: 2,
              borderRadius: 6,
            }}
          >
            <Grid item xs={3}>
              <IconButton
                sx={{
                  backgroundColor:
                    locomotionType === "foot" ? "pink" : "lightgray",
                }}
                onClick={() => setLocomotionType("foot")}
              >
                <DirectionsWalkIcon />
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <IconButton
                sx={{
                  backgroundColor:
                    locomotionType === "car" ? "pink" : "lightgray",
                }}
                onClick={() => setLocomotionType("car")}
              >
                <DirectionsCarIcon />
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <IconButton
                sx={{
                  backgroundColor:
                    locomotionType === "bike" ? "pink" : "lightgray",
                }}
                onClick={() => setLocomotionType("bike")}
              >
                <DirectionsBikeIcon />
              </IconButton>
            </Grid>
          </Grid>
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
              locomotionType={locomotionType}
              setSelectedPoint={(point) => handleSelectedPointChange(point)}
            />
          </MapContainer>
        </Grid>
      </Grid>

      {/* </Grid> */}
    </>
  );
};

export default Trip;
