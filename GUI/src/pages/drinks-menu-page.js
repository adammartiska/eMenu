import React from "react";
import MenuItem from "../components/MenuItem";
import MenuItem2 from "../components/MenuItem2";

const DrinksMenuPage = () => {
  return (
    <div>
      <div>Here will be list of all drinks</div>
      <MenuItem name="Coca Cola" price="12.80" />
      <MenuItem2 name="Coca Cola" price="12.80" />
    </div>
  );
};

export default DrinksMenuPage;
