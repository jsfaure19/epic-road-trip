import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import { Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
const ERTStepper = (props) => {
  const renderSteps = () => {
    const { departure, arrival, waypoints } = props;
    if ((departure, arrival, waypoints)) {
      return (
        <>
          <Grid item xs={12} container sx={{ justifyContent: "space-between" }}>
            <Typography>{departure.cityName}</Typography>
            <SendIcon />
            {
              // TODO Afficher les POI de depzrture (petite icone selon le type + nom du POI)
            }
          </Grid>
          {waypoints.map((waypoint) => {
            return (
              <Grid
                item
                xs={12}
                container
                sx={{ justifyContent: "space-between", pl: 2 }}
              >
                <Typography>{waypoint.cityName}</Typography>
                <Switch
                  checked={!waypoint.disabled}
                  onChange={() => props.handleChange(waypoint.id)}
                />
                {
                  // TODO Afficher les POI du waypoint (petite icone selon le type + nom du POI)
                  //  SAUF SI WAYPOINT DISABLED
                }
              </Grid>
            );
          })}
          <Grid item xs={12} container sx={{ justifyContent: "space-between" }}>
            <Typography>{arrival.cityName}</Typography>
            <SportsScoreIcon />
            {
              // TODO Afficher les POI Arrival (petite icone selon le type + nom du POI)
            }
          </Grid>
        </>
      );
    }
  };

  return (
    <Grid container sx={{ p: 2 }}>
      {renderSteps()}
    </Grid>
  );
};

export default ERTStepper;
