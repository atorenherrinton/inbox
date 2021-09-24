import { Fragment } from "react";
import {
  selectIsEmailInputCollapsed,
  setEmailCardOpen,
} from "../../slices/email-card.slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailAddressList from "../email-address-list/email-address-list";
import EmailInput from "../email-input/email-input";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const EmailCard = () => {
  const dispatch = useAppDispatch();
  const isEmailInputCollapsed = useAppSelector(selectIsEmailInputCollapsed);

  return (
    <Card
      id="email-card"
      raised
      sx={{
        bottom: (theme) => theme.spacing(0),
        right: (theme) => theme.spacing(5),
        maxWidth: 600,
        minWidth: 600,
        minHeight: 550,
        position: "fixed",
      }}
    >
      <CardHeader
        action={
          <IconButton
            aria-label="close button"
            id="close-button"
            onClick={() => dispatch(setEmailCardOpen(false))}
            sx={{ color: (theme) => theme.palette.grey[50] }}
          >
            <CloseIcon />
          </IconButton>
        }
        id="email-header"
        subheader={
          <Fragment>
            <Typography
              id="new-email"
              sx={{ color: (theme) => theme.palette.grey[50] }}
            >
              New Email
            </Typography>
          </Fragment>
        }
        sx={{
          bgcolor: (theme) => theme.palette.grey[700],
        }}
      />
      <CardContent>
        <EmailAddressList />
        {!isEmailInputCollapsed ? <EmailInput /> : null}

        <TextField
          autoComplete="off"
          id="subject-input"
          fullWidth
          placeholder="Subject"
          size="small"
          sx={{ marginTop: (theme) => theme.spacing(1) }}
          variant="standard"
        />
        <TextField
          id="email-body"
          fullWidth
          multiline
          rows={12}
          sx={{ marginTop: (theme) => theme.spacing(2) }}
          variant="outlined"
        />
      </CardContent>
      <CardActions
        disableSpacing
        id="card-actions"
        sx={{ paddingLeft: "16px" }}
      >
        <Button color="primary" id="send-button" variant="contained">
          Send
        </Button>
        <Tooltip id="attachment-tooltip" title="Attach File">
          <IconButton aria-label="attach file" id="attachment-button">
            <AttachFileIcon />
          </IconButton>
        </Tooltip>
        <Tooltip id="delete-tooltip" title="Delete Email">
          <IconButton
            aria-label="delete email"
            id="delete-button"
            onClick={() => dispatch(setEmailCardOpen(false))}
            sx={{ marginLeft: "auto" }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default EmailCard;
