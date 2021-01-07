import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Posts from "../dashboard/Posts";
import SubscriberProjects from "../projects/SubscriberProjects";
import IdeaPosts from "../dashboard/IdeaPosts";
import style from "react-style-tag";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ marginTop: "-20px" }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} style={{ padding: "16px" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette,
    margin: "0 auto",
    paddingTop: "4px",
  },
  AppBar: {
    backgroundColor: "#336699",
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} position="static">
        <Tabs
          style={{
            background: "#336699",
            margin: "0 auto",
          }}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            style={{ background: "#336699" }}
            label="Projects"
            {...a11yProps(0)}
          />
          <Tab
            style={{ background: "#336699" }}
            label="Ideas"
            {...a11yProps(1)}
          />
          <Tab
            style={{ background: "#336699" }}
            label="Subscribers"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Posts />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <IdeaPosts />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SubscriberProjects />
      </TabPanel>
      <style>
        {`
          .PrivateTabIndicator-colorSecondary-7{
              background-color:#ff4500;}
          `}
      </style>
    </div>
  );
}
