import { selectIsEmailCardOpen } from "../../slices/email-card.slice";
import { useSelector } from "react-redux";
import EmailCard from "../../components/email-card/email-card";
import Grid from "@mui/material/Grid";
import NavDrawer from "../../components/nav-drawer/nav-drawer";
import NewEmailButton from "../../components/new-email-button/new-email-button";

const Main = () => {
  const isEmailCardOpen = useSelector(selectIsEmailCardOpen);

  return (
    <div id="main-page">
      <NavDrawer />
      {isEmailCardOpen ? null : <NewEmailButton />}
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        {isEmailCardOpen ? (
          <Grid item>
            <EmailCard />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};

export default Main;
