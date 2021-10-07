import React from "react";
import MenuItem from "../components/MenuItem";
import MenuItem2 from "../components/MenuItem2";
import MenuItem3 from "../components/MenuItem3";

// STATE SHOULD BE OBJECT WITH KEYS AND THEIR QUANTITY
// FOR EXAMPLE : { cocaCola: 2 } idk, if we should keep also 0-quantity drinks in the state
const initialState = {
  cocaCola: 0,
  sprite: 0,
  fanta: 0,
};

const DrinksMenuPage = () => {
  const [drinksOrder, setDrinksOrder] = React.useState(initialState);
  const handleAddButtonClick = (id) =>
    setDrinksOrder({
      ...drinksOrder,
      [id]: ++drinksOrder[id],
    });

  const handleRemoveButtonClick = (id) => {
    if (drinksOrder[id] === 0) {
      return;
    }
    setDrinksOrder({
      ...drinksOrder,
      [id]: --drinksOrder[id],
    });
  };

  return (
    <div>
      <div>Here will be list of all drinks</div>
      <MenuItem name="Coca Cola" price="12.80" />
      <MenuItem2 name="Coca Cola" price="12.80" />
      <MenuItem3
        id="cocaCola"
        onAddButtonClick={handleAddButtonClick}
        onRemoveButtonClick={handleRemoveButtonClick}
        name="Coca Cola"
        count={drinksOrder.cocaCola}
        price="12.80"
      />
    </div>
  );
};

export default DrinksMenuPage;
