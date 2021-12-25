import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./drinksSlice";
import { useMealsQuery } from "../generated/graphql";
import "./food-menu-page.scss";
import FoodCard from "../components/FoodCard";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import burgerUrl from "./burger.jpeg";

const FoodMenuPage = () => {
  const { data, error, loading } = useMealsQuery();
  const [mealOrder, setMealOrder] = React.useState({});
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [currentlyOpenedMealId, setCurrentlyOpenedMealId] =
    React.useState(null);
  const dispatch = useDispatch();

  const toggleDrawer =
    (open, id = null) =>
    (event) => {
      setShowDrawer(open);
      setCurrentlyOpenedMealId(id);
    };

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
      {data?.meals.map(({ id, name, price }) => (
        <FoodCard
          key={id}
          id={id}
          // onAddButtonClick={handleAddButtonClick}
          // onRemoveButtonClick={handleRemoveButtonClick}
          // onAddToBagClick={handleAddToBag}
          title={name}
          count={mealOrder.cocaCola}
          price={price}
          onClick={toggleDrawer(true, id)}
          //onClick={(id) => console.log(id)}
        />
      ))}
      <React.Fragment>
        <SwipeableDrawer
          anchor="bottom"
          open={showDrawer}
          onClose={toggleDrawer(false)}
          sx={{
            "& .MuiPaper-root": {
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            },
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        >
          <Box
            sx={{
              // borderTopLeftRadius: 8,
              // borderTopRightRadius: 8,
              // height: 500,
              // width: "auto",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: "visible",
            }}
            role="presentation"
            //onClick={toggleDrawer(anchor, false)}
            //onKeyDown={toggleDrawer(anchor, false)}
          >
            <Paper variant="outlined">
              <img
                style={{ width: "100%", height: 200, borderTopLeftRadius: 20 }}
                src={burgerUrl}
                alt="burger"
              />
            </Paper>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default FoodMenuPage;
