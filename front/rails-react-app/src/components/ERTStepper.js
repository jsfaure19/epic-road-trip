import React from "react";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import { IconButton, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

const ERTStepper = (props) => {
  const [isNewWaypointFormVisible, setIsNewWaypointFormVisible] =
    React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);

  React.useEffect(() => {
    if (searchValue) {
      async function fetchData() {
        return axios
          .get(
            `http://localhost:3001/search_lat_long?search_string=${searchValue}`
          )
          .then((response) => {
            const res = [...response.data];
            res.forEach((data) => (data.label = data.display_name));
            setSearchResult(response.data);
          });
      }
      fetchData();
    }
  }, [searchValue]);

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
                <div>
                  <Switch
                    checked={!waypoint.disabled}
                    onChange={() => props.handleChange(waypoint.id)}
                  />
                  <DeleteIcon onClick="" />
                </div>

                {
                  // TODO Afficher les POI du waypoint (petite icone selon le type + nom du POI)
                  //  SAUF SI WAYPOINT DISABLED
                }
              </Grid>
            );
          })}

          {isNewWaypointFormVisible ? (
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={searchResult}
              onChange={(e) => {
                props.addWaypoint(searchResult[e.target.value]);
                setIsNewWaypointFormVisible(false);
              }}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Waypoint"
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                />
              )}
            />
          ) : (
            <IconButton onClick={() => setIsNewWaypointFormVisible(true)}>
              <AddIcon />
            </IconButton>
          )}
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
    <Grid
      container
      sx={{
        p: 2,
      }}
    >
      {renderSteps()}
    </Grid>
  );
};

export default ERTStepper;
