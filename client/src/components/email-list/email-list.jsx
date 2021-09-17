import React from "react";
import { selectEmails } from "../../slices/email-list.slice";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import EmailChip from "../email-chip/email-chip";

const EmailList = () => {
  const emails = useSelector(selectEmails);
  return (
    <Box id="email-list">
      {emails.map((email) => (
        <EmailChip email={email} key={email} />
      ))}
    </Box>
  );
};

export default EmailList;
