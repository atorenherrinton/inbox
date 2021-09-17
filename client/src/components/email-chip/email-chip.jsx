import React from "react";
import { deleteEmail } from "../../slices/email-list.slice";
import { useDispatch } from "react-redux";
import Chip from "@mui/material/Chip";

const EmailChip = ({ email }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteEmail(email));
  };
  return <Chip id="email-chip" label={email} onDelete={handleDelete} />;
};

export default EmailChip;
