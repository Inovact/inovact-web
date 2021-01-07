import React from "react";
import { Fab, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
  backgroundColor: "#43dde6",
};
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <Tooltip title="Create Project" aria-label="add">
      <Fab style={style} color="primary" ref={buttonRef} onClick={showModal}>
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};
export default Trigger;
