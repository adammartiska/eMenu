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
import { incrementCount, decrementCount } from "./drinksSlice";
import "./drinks-menu-page.scss";

const formatPrice = (price, count) => {
  return `${(price * count).toFixed(2)} €`;
};

const DrinksMenuPage = () => {
  const drinks = useSelector((state) => state.cart.drinks);
  const dispatch = useDispatch();

  const handleAddButtonClick = React.useCallback(
    (id) => dispatch(incrementCount(id)),
    [dispatch]
  );

  const handleRemoveButtonClick = React.useCallback(
    (id) => dispatch(decrementCount(id)),
    [dispatch]
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
                  onAddButtonClick={() => handleAddButtonClick(id)}
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
