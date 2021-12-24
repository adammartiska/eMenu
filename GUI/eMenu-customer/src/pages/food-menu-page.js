import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./drinksSlice";
import { useMealsQuery } from "../generated/graphql";
import "./food-menu-page.scss";
import FoodCard from "../components/FoodCard";

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
          onClick={(id) => console.log(id)}
        />
      ))}
    </div>
  );
};

export default FoodMenuPage;
