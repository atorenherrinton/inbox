import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addEmailAddress,
  selectEmailAddresses,
} from "../../slices/email-address-list.slice";
import EmailList from "../email-address-list/email-address-list";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

const EmailInput = () => {
  const dispatch = useAppDispatch();
  const [emailAddress, setEmailAddress] = useState("");
  const emails = useAppSelector(selectEmailAddresses);

  const handleAddEmail = (e: React.KeyboardEvent) => {
    if (e.key === "Tab" || e.key === "Enter") {
      e.preventDefault();
      dispatch(addEmailAddress(emailAddress));
      setEmailAddress("");
    }
  };

  const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailAddress(e.target.value);
  };

  return (
    <TextField
      id="email-input"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ margin: 0 }}>
            <EmailList />
          </InputAdornment>
        ),
      }}
      fullWidth
      multiline
      onChange={handleSetEmail}
      onKeyDown={handleAddEmail}
      placeholder={emails.length > 0 ? undefined : "To"}
      size="small"
      value={emailAddress}
    />
  );
};

export default EmailInput;
