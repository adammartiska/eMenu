import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { Badge } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      color="onyx"
      sx={{
        marginTop: 0,
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 2,
        paddingRight: 2,
      }}
    >
      <Typography variant="h4" color="inherit" component="div">
        Eat And Meet
      </Typography>
      <Button component={RouterLink} to="/orderInformation">
        <WatchLaterIcon
          sx={{
            color: "orange",
            fontSize: 20,
            position: "absolute",
            bottom: 15,
            right: 12,
          }}
        />
        <NotificationsIcon sx={{ color: "black" }} />
      </Button>
    </AppBar>
  );
};

export default Header;
