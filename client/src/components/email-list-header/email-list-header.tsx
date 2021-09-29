import { useAppDispatch } from "../../app/hooks";
import { clearEmails } from "../../slices/email-list.slice";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const EmailListHeader = () => {
  const dispatch = useAppDispatch();
  const handleClearEmails = () => {
    dispatch(clearEmails());
  };
  return (
    <Grid
      container
      alignItems="center"
      id="table-header"
      justifyContent="space-between"
      sx={{
        paddingLeft: (theme) => theme.spacing(1),
      }}
    >
      <Grid item>
        <Typography id="day" variant="overline">
          Today
        </Typography>
      </Grid>
      <Grid item>
        <IconButton
          aria-label="clear all"
          id="done-all-button"
          onClick={handleClearEmails}
          size="small"
          sx={{ float: "right" }}
        >
          <DoneAllIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default EmailListHeader;
