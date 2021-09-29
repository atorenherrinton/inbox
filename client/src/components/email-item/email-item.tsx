
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

type EmailItemProps = {
  id: number;
  sender: string;
  subject: string;
  body: string;
  date: string;
};

const EmailItem = ({ id, sender, subject, body, date }: EmailItemProps) => {
  return (
    <TableRow
      hover
      id="email-item"
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        cursor: "pointer",
      }}
    >
      <TableCell
        component="th"
        id="sender"
        scope="row"
        sx={{
          fontWeight: "bold",
        }}
      >
        {sender}
      </TableCell>
      <TableCell component="th" id="subject-body" scope="row">
        <strong>{subject}</strong> - {body.slice(0, 10).trim()}...
      </TableCell>
      <TableCell component="th" id="date" scope="row">
        {date}
      </TableCell>
    </TableRow>
  );
};

export default EmailItem;
