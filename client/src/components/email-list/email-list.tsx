import { useAppSelector } from "../../app/hooks";
import { selectEmails } from "../../slices/email-list.slice";
import Box from "@mui/material/Box";
import EmailItem from "../email-item/email-item";
import EmailListHeader from "../email-list-header/email-list-header";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

const EmailList = () => {
  const emails = useAppSelector(selectEmails);
  return (
    <Box id="email-list" sx={{ marginTop: (theme) => theme.spacing(4) }}>
      <EmailListHeader />
      <TableContainer component={Paper}>
        <Table aria-label="simple table"  sx={{ minWidth: 700 }} >
          <TableBody>
            {emails.map((email) => (
              <EmailItem key={email.id} {...email} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EmailList;
