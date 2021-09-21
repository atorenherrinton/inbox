import { deleteEmailAddress } from "../../slices/email-address-list.slice";
import { useAppDispatch } from "../../app/hooks";
import Chip from "@mui/material/Chip";

type EmailProps = {
  emailAddress: string;
};

const EmailChip = ({ emailAddress }: EmailProps) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteEmailAddress(emailAddress));
  };
  return <Chip id="email-chip" label={emailAddress} onDelete={handleDelete} />;
};

export default EmailChip;
