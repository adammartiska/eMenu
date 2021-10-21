import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      color="onyx"
      sx={{
        marginTop: 0,
        height: 55,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" color="inherit" component="div">
        Eat And Meet
      </Typography>
      <Typography variant="subtitle2" color="inherit" component="div">
        Clementisova 1589/31, Banovce nad Bebravou
      </Typography>
    </AppBar>
  );
};

export default Header;
