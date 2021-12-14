import React from "react";
import MenuItem3 from "../components/MenuItem3";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./drinksSlice";
import { useMealsQuery } from "../generated/graphql";

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
    <div className="drinks-menu-page-wrapper">
      {data?.meals.map(({ id, name, price }) => (
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
      ))}
    </div>
  );
};

export default FoodMenuPage;
