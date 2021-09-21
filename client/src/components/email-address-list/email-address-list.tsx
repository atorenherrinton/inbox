import { selectEmailAddresses } from "../../slices/email-address-list.slice";
import { useAppSelector } from "../../app/hooks";
import Box from "@mui/material/Box";
import EmailAddressChip from "../email-address-chip/email-address-chip";

const EmailList = () => {
  const emails = useAppSelector(selectEmailAddresses);
  return (
    <Box id="email-list">
      {emails.map((email) => (
        <EmailAddressChip emailAddress={email} key={email} />
      ))}
    </Box>
  );
};

export default EmailList;
