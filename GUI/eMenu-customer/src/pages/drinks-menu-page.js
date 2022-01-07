import React from "react";
import MenuItem3 from "../components/MenuItem3";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cacheDrinks } from "./drinksSlice";
import { useDrinksQuery } from "../generated/graphql";
import DrinkCard from "../components/DrinkCard";
import "./drinks-menu-page.scss";
import { SwipeableBottomDrawer } from "../components/SwipeableDrawer";

// STATE SHOULD BE OBJECT WITH KEYS AND THEIR QUANTITY
// FOR EXAMPLE : { cocaCola: 2 } idk, if we should keep also 0-quantity drinks in the state
const initialState = {
  cocaCola: 0,
  sprite: 0,
  fanta: 0,
  tonic: 0,
};

const DrinksMenuPage = () => {
  //const drinks = useSelector((state) => state.cart.drinks);
  const { data: drinks, error, loading } = useDrinksQuery();
  const [showDrawer, setShowDrawer] = React.useState(false);
  const dispatch = useDispatch();
  const [drinksOrder, setDrinksOrder] = React.useState(initialState);
  const handleAddButtonClick = React.useCallback(
    (id) =>
      setDrinksOrder({
        ...drinksOrder,
        [id]: ++drinksOrder[id],
      }),
    [drinksOrder]
  );

  React.useEffect(() => {
    // cache meals once its data is loaded
    dispatch(cacheDrinks(drinks));
  }, [drinks, dispatch]);

  const handleRemoveButtonClick = React.useCallback(
    (id) => {
      if (drinksOrder[id] === 0) {
        return;
      }
      setDrinksOrder({
        ...drinksOrder,
        [id]: --drinksOrder[id],
      });
    },
    [drinksOrder]
  );

  //TODO ADD some kind of user notification that items were added into cart
  const handleAddToBag = React.useCallback(
    (id, name, price) =>
      dispatch(addToCart({ id, name, count: drinksOrder[id], price })),
    [drinksOrder, dispatch]
  );

  return (
    <div className="drinks-menu-page-wrapper">
      {drinks?.drinks.map(({ id, name, price }) => (
        <DrinkCard
          key={id}
          id={id}
          onAddButtonClick={handleAddButtonClick}
          onRemoveButtonClick={handleRemoveButtonClick}
          onAddToBagClick={handleAddToBag}
          title={name}
          count={drinksOrder.cocaCola}
          price={price}
        />
      ))}
      <SwipeableBottomDrawer
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        handleAddToBag={handleAddToBag}
      />
    </div>
  );
};

export default DrinksMenuPage;
