import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import "./MenuItem.css";
import burgerUrl from "../static/burger.jpeg";
import { createTheme } from "@mui/material/styles";

const FoodCard = ({
  title = "Kralovsky burger",
  description = "100 % hovadzie maso, domaca slaninka, vajicko, majoneza, ponozky a rozne ...",
  price,
  image = burgerUrl,
  onClick,
  id,
  ...rest
}) => {
  return (
    <Card
      raised
      sx={{
        display: "flex",
        height: 110,
        paddingVertical: 10,
        marginBottom: 1.5,
      }}
      {...rest}
    >
      <CardActionArea onClick={() => onClick(id)}>
        <Box>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{ marginRight: 20 }}>
              <Typography
                component="div"
                variant="h5"
                //TODO Why is sx prop adding extra margin and style prop not???
                style={{ marginBottom: 5 }}
              >
                {title}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
                style={{ marginBottom: 5 }}
              >
                {description}
              </Typography>
              <Typography component="div" variant="h6">
                {`${price} €`}
              </Typography>
            </div>
            <CardMedia
              component="img"
              sx={{ width: 90, height: 70 }}
              image={image}
              //alt="Live from space album cover"
            />
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default FoodCard;
