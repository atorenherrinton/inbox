import React, { useState } from "react";
import { setEmailCardOpen } from "../../slices/email-card.slice";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

const NewEmailButton = () => {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const handleOpenEmail = () => {
    dispatch(setEmailCardOpen());
    setExpanded(!expanded);
  };

  return (
    <Box
      id="new-email-button"
      sx={{
        position: "fixed",
        bottom: (theme) => theme.spacing(5),
        right: (theme) => theme.spacing(5),
      }}
    >
      <Fab
        aria-label="expand"
        aria-expanded={expanded}
        color="primary"
        disableRipple
        onClick={handleOpenEmail}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default NewEmailButton;
