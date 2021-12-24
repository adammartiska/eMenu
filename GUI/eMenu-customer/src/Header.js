import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import NotificationsIcon from "@mui/icons-material/Notifications";

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
      <NotificationsIcon />
    </AppBar>
  );
};

export default Header;
