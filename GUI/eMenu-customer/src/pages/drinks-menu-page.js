import React from "react";
import MenuItem3 from "../components/MenuItem3";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./drinksSlice";
import "./drinks-menu-page.scss";

// STATE SHOULD BE OBJECT WITH KEYS AND THEIR QUANTITY
// FOR EXAMPLE : { cocaCola: 2 } idk, if we should keep also 0-quantity drinks in the state
const initialState = {
  cocaCola: 0,
  sprite: 0,
  fanta: 0,
  tonic: 0,
};

// THESE PRICES WILL BE FETCHED FROM BACKEND
const COLAPRICE = 12.8;
const SPRITEPRICE = 8.2;
const TONICPRICE = 2.4;

const DrinksMenuPage = () => {
  //const drinks = useSelector((state) => state.cart.drinks);
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
      {/* 

        Another variants for menu items
      <MenuItem name="Coca Cola" price="12.80" />
      <MenuItem2
        id="cocaCola"
        onAddButtonClick={handleAddButtonClick}
        onRemoveButtonClick={handleRemoveButtonClick}
        onAddToBagClick={handleAddToBag}
        name="Coca Cola"
        count={drinksOrder.cocaCola}
        price="12.80"
      /> */}
      <MenuItem3
        id="cocaCola"
        onAddButtonClick={handleAddButtonClick}
        onRemoveButtonClick={handleRemoveButtonClick}
        onAddToBagClick={handleAddToBag}
        name="Coca Cola"
        count={drinksOrder.cocaCola}
        price={COLAPRICE}
      />

      <MenuItem3
        id="sprite"
        onAddButtonClick={handleAddButtonClick}
        onRemoveButtonClick={handleRemoveButtonClick}
        onAddToBagClick={handleAddToBag}
        name="Sprite"
        count={drinksOrder.sprite}
        price={SPRITEPRICE}
      />

      <MenuItem3
        id="tonic"
        onAddButtonClick={handleAddButtonClick}
        onRemoveButtonClick={handleRemoveButtonClick}
        onAddToBagClick={handleAddToBag}
        name="Tonic"
        count={drinksOrder.tonic}
        price={TONICPRICE}
      />
    </div>
  );
};

export default DrinksMenuPage;
