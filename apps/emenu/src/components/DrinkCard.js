import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import "./MenuItem.css";
import burgerUrl from "../static/burger.jpeg";

const DrinkCard = ({
  title = "Cappy pomaranc 100%",
  amount = 0.33,
  price,
  image,
  onClick,
  id,
  ...rest
}) => {
  return (
    <Card
      sx={{
        borderRadius: 0,
        display: "flex",
        marginBottom: 1,
      }}
      {...rest}
    >
      <CardActionArea onClick={() => onClick(id)}>
        <Box>
          <CardContent
            sx={{
              "&.MuiCardContent-root": {
                padding: 1,
              },
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              //   paddingTop: 1,
              //   paddingBottom: 1,
              //   paddingLeft: 1.5,
              //   paddingRight: 1,
            }}
          >
            <div>
              <Typography
                component="div"
                variant="h5"
                //TODO Why is sx prop adding extra margin and style prop not???
                //because my default spacing is 8px can be adjusted in theme - responsiveness
                style={{ marginBottom: 5 }}
              >
                {title}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
                sx={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  marginBottom: 1,
                }}
              >
                {amount} L
              </Typography>
              <Typography component="div" variant="h6">
                {`${price} €`}
              </Typography>
            </div>
            {image && (
              <CardMedia
                component="img"
                sx={{ width: 80, height: 55, marginLeft: 2 }}
                image={image}
                //alt="Live from space album cover"
              />
            )}
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default DrinkCard;
