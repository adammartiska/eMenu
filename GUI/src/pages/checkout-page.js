import MenuItem from "../components/MenuItem";
import CartItem from "../components/CartItem";
import MenuItem3 from "../components/MenuItem3";
import Counter from "../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { addToCart } from "./drinksSlice";
import "./drinks-menu-page.scss";

const formatPrice = (price, count) => {
  return `${(price * count).toFixed(2)} €`;
};

const findRelevantDrink = (drinks, id) =>
  drinks.filter((drink) => drink.id !== id);

const initialState = {
  cocaCola: 0,
  sprite: 0,
  fanta: 0,
  tonic: 0,
};

const DrinksMenuPage = () => {
  const drinks = useSelector((state) => state.cart.drinks);
  console.log(drinks);
  const dispatch = useDispatch();

  const [drinksOrder, setDrinksOrder] = React.useState(initialState);
  //   const handleAddButtonClick = React.useCallback(
  //     (id) =>
  //       setDrinksOrder({
  //         ...drinksOrder,
  //         [id]: ++drinksOrder[id],
  //       }),
  //     [drinksOrder]
  //   );

  const handleAddButtonClick = React.useCallback(
    (id, name, price) =>
      dispatch(
        // modify only count of the cart
        addToCart({
          id,
          name,
          count: ++findRelevantDrink(drinks, id).count,
          price,
        })
      ),
    [drinksOrder, findRelevantDrink, dispatch, drinks]
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

  return (
    <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Polozka</TableCell>
            <TableCell align="center">Mnozstvo</TableCell>
            <TableCell align="right">Cena</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {drinks.map(({ id, name, count, price }) => (
            <TableRow key={name}>
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="center">
                <Counter
                  id={id}
                  count={count}
                  onAddButtonClick={() => handleAddButtonClick(id, name, price)}
                  onRemoveButtonClick={handleRemoveButtonClick}
                />
              </TableCell>
              <TableCell align="right">{formatPrice(price, count)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DrinksMenuPage;
