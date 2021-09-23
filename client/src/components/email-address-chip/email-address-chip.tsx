import {
  deleteEmailAddress,
  setEmailAddress,
} from "../../slices/email-address-list.slice";
import {
  setEmailInputCollapsed,
  setEmailInputFocused,
} from "../../slices/email-card.slice";
import { useAppDispatch } from "../../app/hooks";
import Chip from "@mui/material/Chip";

type EmailProps = {
  emailAddress: string;
};

const EmailChip = ({ emailAddress }: EmailProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteEmailAddress(emailAddress));
    dispatch(setEmailInputCollapsed(false));
    dispatch(setEmailInputFocused(true));
  };

  const handleEditEmail = () => {
    dispatch(deleteEmailAddress(emailAddress));
    dispatch(setEmailAddress(emailAddress));
    dispatch(setEmailInputCollapsed(false));
    dispatch(setEmailInputFocused(true));
  };

  return (
    <Chip
      id="email-chip"
      label={emailAddress}
      onDelete={handleDelete}
      onClick={handleEditEmail}
      variant="outlined"
    />
  );
};

export default EmailChip;
