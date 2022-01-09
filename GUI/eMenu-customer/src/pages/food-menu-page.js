import React from "react";
import { useDispatch } from "react-redux";
import { cacheMeals } from "./mealsSlice";
import { addMealToCart } from "./orderSlice";
import { useMealsQuery } from "../generated/graphql";
import "./food-menu-page.scss";
import FoodCard from "../components/FoodCard";
import { SwipeableBottomDrawer } from "../components/SwipeableBottomDrawer";

const FoodMenuPage = () => {
  const { data: meals, error, loading } = useMealsQuery();
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [currentlyOpenedMealId, setCurrentlyOpenedMealId] =
    React.useState(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // cache meals once its data is loaded
    dispatch(cacheMeals(meals));
  }, [meals, dispatch]);

  //TODO ADD some kind of user notification that items were added into cart
  const handleAddToBag = React.useCallback(
    ({ id, count, additionalOrderInfo }) => {
      dispatch(
        addMealToCart({
          id,
          count,
          additionalOrderInfo: additionalOrderInfo ?? undefined,
        })
      );
      setShowDrawer(false);
    },
    [dispatch]
  );
  return (
    <div className="food-menu-page-wrapper">
      {meals?.meals.map(({ id, name, price }) => (
        <FoodCard
          key={id}
          id={id}
          title={name}
          price={price}
          onClick={(id) => {
            setCurrentlyOpenedMealId(id);
            setShowDrawer(true);
          }}
        />
      ))}
      <SwipeableBottomDrawer
        isMeal
        image
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        handleAddToBag={handleAddToBag}
        currentlyOpenedItemId={currentlyOpenedMealId}
      />
    </div>
  );
};

export default FoodMenuPage;
