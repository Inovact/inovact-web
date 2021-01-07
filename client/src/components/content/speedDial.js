import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EditIcon from "@material-ui/icons/Edit";
import lightBlue from "@material-ui/core/colors/lightBlue";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import orange from "@material-ui/core/colors/orange";
import { MuiThemeProvider } from "@material-ui/core/styles";
import style from "react-style-tag";
const orangeTheme = createMuiTheme({
  palette: { primary: orange, secondary: orange },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  },
  speedDial: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const muiTheme = createMuiTheme({
  palette: { primary: orange, secondary: orange },
});

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
  { icon: <FavoriteIcon />, name: "Like" },
];

export default function OpenIconSpeedDial() {
  const classes = useStyles();
  const themes = muiTheme;
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={orangeTheme}>
        <SpeedDial
          onMouseDown="this.style.background='orange'"
          ariaLabel="SpeedDial openIcon example"
          className={classes.speedDial}
          hidden={hidden}
          icon={
            <SpeedDialIcon
              className={muiTheme}
              color="primary"
              openIcon={<EditIcon />}
            />
          }
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </MuiThemeProvider>
      <style>
        {`
         
         
        `}
      </style>
    </div>
  );
}
