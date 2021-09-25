import { useCallback, useEffect } from "react";
import {
  selectIsEmailCardOpen,
  setEmailCardOpen,
} from "../../slices/email-card.slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Box from "@mui/material/Box";
import EmailCard from "../../components/email-card/email-card";
import EmailTable from "../../components/email-table/email-table";
import Grid from "@mui/material/Grid";
import NavDrawer from "../../components/nav-drawer/nav-drawer";
import NewEmailButton from "../../components/new-email-button/new-email-button";

const Main = () => {
  const dispatch = useAppDispatch();
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
          <EmailTable />
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
