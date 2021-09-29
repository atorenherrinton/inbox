import { useCallback, useEffect } from "react";
import {
  selectIsEmailCardOpen,
  setEmailCardOpen,
} from "../../slices/email-card.slice";
import { selectEmails } from "../../slices/email-list.slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import AllDoneAnimation from "../../components/all-done-animation/all-done-animation";
import Box from "@mui/material/Box";
import EmailCard from "../../components/email-card/email-card";
import EmailList from "../../components/email-list/email-list";
import Grid from "@mui/material/Grid";
import NavDrawer from "../../components/nav-drawer/nav-drawer";
import NewEmailButton from "../../components/new-email-button/new-email-button";

const Main = () => {
  const dispatch = useAppDispatch();
  const emails = useAppSelector(selectEmails);
  const isEmailCardOpen = useAppSelector(selectIsEmailCardOpen);

  const handleOpenNewEmail = useCallback(
    (e) => {
      if (e.key === "c") {
        dispatch(setEmailCardOpen(true));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      handleOpenNewEmail(e);
    });

    return window.removeEventListener("keydown", (e) => {
      handleOpenNewEmail(e);
    });
  }, [handleOpenNewEmail]);

  return (
    <Box id="main-page" tabIndex={0}>
      <NavDrawer />
      {isEmailCardOpen ? null : <NewEmailButton />}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          {emails.length > 0 ? <EmailList /> : <AllDoneAnimation />}
        </Grid>
      </Grid>
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
    </Box>
  );
};

export default Main;
