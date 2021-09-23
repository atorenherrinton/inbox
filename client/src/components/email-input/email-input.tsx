import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { checkForDuplicate, validateEmailAddress } from "../../utils/utils";
import {
  addEmailAddress,
  selectEmailAddress,
  selectEmailAddresses,
  setEmailAddress,
} from "../../slices/email-address-list.slice";
import {
  selectIsEmailInputFocused,
  setEmailInputFocused,
  setEmailInputCollapsed,
} from "../../slices/email-card.slice";
import {
  selectValidationError,
  setValidationError,
} from "../../slices/email-input.slice";
import TextField from "@mui/material/TextField";

const EmailInput = () => {
  const dispatch = useAppDispatch();
  const emailAddress = useAppSelector(selectEmailAddress);
  const emailAddresses = useAppSelector(selectEmailAddresses);
  const validationError = useAppSelector(selectValidationError);
  const isEmailInputFocused = useAppSelector(selectIsEmailInputFocused);

  const handleAddEmail = (e: React.KeyboardEvent) => {
    if (
      emailAddresses.length > 0 &&
      e.key === "Tab" &&
      emailAddress.length === 0
    ) {
      dispatch(setEmailInputCollapsed(true));
    } else if (emailAddress.length === 0 && e.key === "Tab") {
      return;
    } else if (emailAddress.length === 0 && e.key === "Enter") {
      e.preventDefault();
    } else if (e.key === "Tab" || e.key === "Enter") {
      e.preventDefault();
      if (
        checkForDuplicate(emailAddress, emailAddresses) &&
        validateEmailAddress(emailAddress)
      ) {
        dispatch(addEmailAddress(emailAddress));
        dispatch(setEmailAddress(""));
      } else if (!validateEmailAddress(emailAddress)) {
        dispatch(setValidationError("Please enter a valid email"));
      } else {
        dispatch(setValidationError("Email already added"));
      }
    }
  };

  const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmailAddress(e.target.value));
    if (validationError) {
      dispatch(setValidationError(""));
    }
  };

  return (
    <TextField
      autoComplete="off"
      error={validationError ? true : false}
      id="email-input"
      inputRef={(input) => {
        if (isEmailInputFocused && input != null) {
          input.focus();
          dispatch(setEmailInputFocused(false));
        }
      }}
      helperText={validationError}
      fullWidth
      onChange={handleSetEmail}
      onKeyDown={handleAddEmail}
      placeholder="To"
      size="small"
      value={emailAddress}
      variant="standard"

    />
  );
};

export default EmailInput;
