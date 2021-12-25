import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./drinksSlice";
import { useMealsQuery } from "../generated/graphql";
import "./food-menu-page.scss";
import FoodCard from "../components/FoodCard";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import burgerUrl from "./burger.jpeg";
import Counter from "../components/Counter";

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
            }}
            role="presentation"
            //onClick={toggleDrawer(anchor, false)}
            //onKeyDown={toggleDrawer(anchor, false)}
          >
            <Box
              sx={{
                width: 30,
                height: 6,
                bgcolor: "onyxDarker.main",
                borderRadius: 3,
                position: "absolute",
                top: 8,
                left: "calc(50% - 15px)",
              }}
            />
            <Paper variant="outlined">
              <img
                style={{ width: "100%", height: 200, borderTopLeftRadius: 20 }}
                src={burgerUrl}
                alt="burger"
              />
            </Paper>
            <div style={{ margin: 10 }}>
              <Typography
                component="div"
                variant="h4"
                //TODO Why is sx prop adding extra margin and style prop not???
                //because my default spacing is 8px can be adjusted in theme - responsiveness
                sx={{ fontSize: 20 }}
              >
                Burger so slaninkou a chedarrom
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
                style={{ marginBlock: 5 }}
              >
                100 % hovadzie maso, domaca slaninka, vajicko, majoneza,
                ponozky, belgicke hranolky, domaci syrovy dip
              </Typography>
              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Counter
                  id={currentlyOpenedMealId}
                  //count={count}
                  // onAddButtonClick={() => handleAddButtonClick(id)}
                  // onRemoveButtonClick={handleRemoveButtonClick}
                />
                <Button
                  onClick={handleAddToBag}
                  color="onyx"
                  variant="contained"
                  //endIcon={<AddShoppingCartIcon />}
                  sx={{
                    textTransform: "none",
                    height: 35,
                    bgcolor: "onyx",
                    marginLeft: 2,
                  }}
                >
                  Pridat do kosika
                </Button>
              </div>
            </div>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default FoodMenuPage;
