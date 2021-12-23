import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { addToCart } from "./drinksSlice";
import { useMealsQuery } from "../generated/graphql";
import "./food-menu-page.scss";
import burgerUrl from "../static/burger.jpeg";

const FoodMenuPage = () => {
  const { data, error, loading } = useMealsQuery();
  const [mealOrder, setMealOrder] = React.useState({});
  const dispatch = useDispatch();

  const handleAddButtonClick = React.useCallback(
    (id) =>
      setMealOrder({
        ...mealOrder,
        [id]: ++mealOrder[id],
      }),
    [mealOrder]
  );

  const handleRemoveButtonClick = React.useCallback(
    (id) => {
      if (mealOrder[id] === 0) {
        return;
      }
      setMealOrder({
        ...mealOrder,
        [id]: --mealOrder[id],
      });
    },
    [mealOrder]
  );

  //TODO ADD some kind of user notification that items were added into cart
  const handleAddToBag = React.useCallback(
    (id, name, price) =>
      dispatch(addToCart({ id, name, count: mealOrder[id], price })),
    [mealOrder, dispatch]
  );
  return (
    <div className="food-menu-page-wrapper">
      {/* {data?.meals.map(({ id, name, price }) => (
        <MenuItem3
          key={id}
          id={id}
          onAddButtonClick={handleAddButtonClick}
          onRemoveButtonClick={handleRemoveButtonClick}
          onAddToBagClick={handleAddToBag}
          name={name}
          count={mealOrder.cocaCola}
          price={price}
        />
      ))} */}
      <Card sx={{ display: "flex", height: 95, paddingVertical: 10 }}>
        <Box>
          <CardContent sx={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: 20 }}>
              <Typography component="div" variant="h6">
                Kralovsky burger
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                100 % hovadzie maso, domaca slaninka, vajicko, majoneza, ponozky
                a rozne ...
              </Typography>
            </div>
            <CardMedia
              component="img"
              sx={{ width: 90, height: 70 }}
              image={burgerUrl}
              //alt="Live from space album cover"
            />
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default FoodMenuPage;
