import { setNavDrawerOpen } from "../../slices/nav-drawer.slice";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "../search-bar/search-bar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <Box id="nav-bar" sx={{ display: "flex" }}>
      <AppBar
        position="static"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            aria-label="menu"
            edge="start"
            color="inherit"
            id="menu-button"
            onClick={() => dispatch(setNavDrawerOpen())}
            sx={{ marginRight: (theme) => theme.spacing(2) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Inbox
          </Typography>
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
