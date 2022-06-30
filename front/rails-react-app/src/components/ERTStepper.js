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
              </Grid>
            );
          })}
          <Grid item xs={12} container sx={{ justifyContent: "space-between" }}>
            <Typography>{arrival.cityName}</Typography>
            <SportsScoreIcon />
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
