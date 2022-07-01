import React from "react";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import { IconButton, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HotelIcon from "@mui/icons-material/Hotel";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";

const ERTPoiSelector = (props) => {
  const [cofeePub, setCofeePub] = React.useState([]);
  const [hostel, setHostel] = React.useState([]);
  const [entertainement, setEntertainment] = React.useState([]);
  const [tabValue, setTabValue] = React.useState(0);

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  React.useEffect(() => {
    updateCofeePub();
    updateHostel();
    updateEntertainement();
  }, []);

  const updateCofeePub = () => {
    // retrieve from API
    "café/pub";
    "restaurant";
  };

  const updateHostel = () => {
    // retrieve from API
    "hostel";
    "bed breakfast guest houses";
    "hotel/motel";
  };

  const updateEntertainement = () => {
    // retrieve from API
    "casino";
    "comedy club";
    "karaoke club";
    "theater";
    "cinema";
  };
  return (
    <Grid container>
      <Grid item>
        <IconButton onClick={props.onClose}>
          <ArrowBackIcon />
        </IconButton>
        {props.selectedPoint.cityName}
      </Grid>
      <Grid item container sx={{ p: 2 }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ height: "45px" }}
        >
          <Tab icon={<RestaurantIcon />} />
          <Tab icon={<HotelIcon />} />
          <Tab icon={<TheaterComedyIcon />} />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          {
            // TODO AFFICHER cofeePub
            // OnClick sur un des items utilise props.handleChangePOI(props.selectedpoint, tonpoi)
          }
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          {
            // TODO Afficher hostel
            // OnClick sur un des items utilise props.handleChangePOI(props.selectedpoint, tonpoi)
          }
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          {
            // TODO Afficher entertainement
            // OnClick sur un des items utilise props.handleChangePOI(props.selectedpoint, tonpoi)
          }
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default ERTPoiSelector;
