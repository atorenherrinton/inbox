import { selectEmailAddresses } from "../../slices/email-address-list.slice";
import { useAppSelector } from "../../app/hooks";
import EmailAddressChip from "../email-address-chip/email-address-chip";
import Grid from "@mui/material/Grid";

const EmailAddressList = () => {
  const emails = useAppSelector(selectEmailAddresses);
  return (
    <Grid
      container
      id="email-list"
      spacing={1}
      sx={{ marginBottom: (theme) => theme.spacing(1) }}
    >
      {emails.map((email) => (
        <Grid item key={email}>
          <EmailAddressChip emailAddress={email} />
        </Grid>
      ))}
    </Grid>
  );
};

export default EmailAddressList;
