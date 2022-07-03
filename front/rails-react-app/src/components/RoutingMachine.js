import L, { marker } from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import SendIcon from "@mui/icons-material/Send";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

require("lrm-graphhopper");

const CreateRoutingMachineLayer = (props) => {
  const renderWaypoints = () => {
    const { departure, arrival, waypoints } = props;
    let finalWaypoints = [];
    finalWaypoints.push(L.latLng(departure.lat, departure.long));
    waypoints.forEach((waypoint) => {
      if (!waypoint.disabled)
        finalWaypoints.push(L.latLng(waypoint.lat, waypoint.long));
    });
    finalWaypoints.push(L.latLng(arrival.lat, arrival.long));
    return finalWaypoints;
  };

  const renderMarkerIcon = (markerIndex, totalWaypoints) => {
    switch (markerIndex) {
      case 0:
        return "http://cdn.onlinewebfonts.com/svg/img_119878.png";
      case totalWaypoints - 1:
        return "https://icon-library.com/images/finish-flag-icon/finish-flag-icon-27.jpg";
      default:
        return "https://icon-library.com/images/waypoint-icon/waypoint-icon-12.jpg";
    }
  };

  const getCompletePoint = (lat, lng) => {
    const { departure, arrival, waypoints } = props;
    let finalWaypoints = [];

    finalWaypoints.push(departure);
    waypoints.forEach((waypoint) => {
      if (!waypoint.disabled) finalWaypoints.push(waypoint);
    });
    finalWaypoints.push(arrival);
    const res = finalWaypoints.find(
      (wayp) => wayp.lat === lat && wayp.long === lng
    );
    return res;
  };

  const instance = L.Routing.control({
    waypoints: renderWaypoints(),
    lineOptions: {
      styles: [{ color: "pink", weight: 4 }],
    },
    show: true,
    addWaypoints: true,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    language: "fr",
    router: L.Routing.graphHopper("cf060103-c01e-442f-83df-d007fb0690f8", {
      urlParameters: { vehicle: props.locomotionType, locale: "fr_FR" },
    }),
    createMarker: function (index, waypoint, totalWaypoints) {
      const marker = L.marker(waypoint.latLng, {
        draggable: true,
        bounceOnAddOptions: {
          duration: 1000,
          height: 800,
        },
        icon: L.icon({
          iconUrl: renderMarkerIcon(index, totalWaypoints),
          iconSize: [30, 30],
        }),
      }).on("click", function (e) {
        const { lat, lng } = waypoint.latLng;
        const res = getCompletePoint(lat, lng);
        props.setSelectedPoint(res);
      });
      return marker;
    },
    showAlternatives: false,
  });

  return instance;
};

const RoutingMachine = createControlComponent(CreateRoutingMachineLayer);

export default RoutingMachine;
