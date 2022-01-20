import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckIcon from "@mui/icons-material/Check";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";

const renderBadgeAccordingOrderState = (state) => {
  if (state === "OPEN") {
    return (
      <WatchLaterIcon
        sx={{
          color: "yellow",
          fontSize: 20,
          position: "absolute",
          bottom: 15,
          right: 12,
        }}
      />
    );
  }
  if (state === "CONFIRMED") {
    return (
      <CheckIcon
        sx={{
          color: "green",
          fontSize: 20,
          position: "absolute",
          bottom: 15,
          right: 12,
        }}
      />
    );
  } else {
    return (
      <VisibilityIcon
        sx={{
          color: "onyx.fontInactive",
          fontSize: 20,
          position: "absolute",
          bottom: 15,
          right: 12,
        }}
      />
    );
  }
};

const Header = () => {
  const orderState = useSelector((state) => state?.order?.orderState);
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
        {renderBadgeAccordingOrderState(orderState)}
        <NotificationsIcon sx={{ color: "black" }} />
      </Button>
    </AppBar>
  );
};

export default Header;
