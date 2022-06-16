import L, { marker } from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import SendIcon from "@mui/icons-material/Send";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

const CreateRoutingMachineLayer = (props) => {
  const renderWaypoints = () => {
    console.log("test");
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
    // createMarker: (i, waypoint, n) => {
    //   console.log("marker I", i);
    //   console.log("marker wayp", waypoint);
    //   console.log("marker N", n);
    //   return (
    //     <Marker>
    //       <SendIcon />
    //     </Marker>
    //   );
    // },
    createMarker: function (index, waypoint, totalWaypoints) {
      const marker = L.marker(waypoint.latLng, {
        draggable: true,
        bounceOnAddOptions: {
          duration: 1000,
          height: 800,
          function() {
            console.log("toto");
          },
        },
        icon: L.icon({
          iconUrl: renderMarkerIcon(index, totalWaypoints),
          iconSize: [30, 30],
          // iconAnchor: [30, 30],
          // popupAnchor: [-3, -76],
          // shadowSize: [30, 30],
          // shadowAnchor: [30, 30],
        }),
      }).on("click", function (e) {
        console.log("tata");
      });
      return marker;
    },
    showAlternatives: false,
  });
  return instance;
};

const RoutingMachine = createControlComponent(CreateRoutingMachineLayer);

export default RoutingMachine;
