import Counter from "../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { incrementCount, decrementCount } from "./drinksSlice";
import { getMealById } from "../utils/utils";
import { useCreateSuborderMutation } from "../generated/graphql";
import { saveToken } from "./userSlice";
import "./drinks-menu-page.scss";

const formatPrice = (price, count) => {
  return `${(price * count).toFixed(2)} €`;
};

const CheckoutPage = () => {
  //const [tableId, setTableId] = React.useState(Math.rand());
  const userToken = useSelector((state) => state?.user?.token);
  const drinksOrder = useSelector((state) => state?.drinks?.drinkOrder);
  const mealsOrder = useSelector((state) => state?.meals?.mealOrder);
  const [createSuborderMutation, { data, loading, error }] =
    useCreateSuborderMutation({
      variables: {
        tableId: 123,
        meals: mealsOrder,
        drinks: drinksOrder,
        //below is random token with length of our token, received token will be different
        token: userToken ?? "vDso4eBx",
      },
    });
  //TODO WTF???
  const meals = useSelector((state) => state?.meals?.meals?.meals);
  const dispatch = useDispatch();

  const handleAddButtonClick = React.useCallback(
    (id) => dispatch(incrementCount(id)),
    [dispatch]
  );

  const handleRemoveButtonClick = React.useCallback(
    (id) => dispatch(decrementCount(id)),
    [dispatch]
  );

  const submitOrder = React.useCallback(async () => {
    const response = await createSuborderMutation();
    if (response?.data) {
      dispatch(saveToken(response?.data?.createSuborder?.token));
      console.log(response);
      console.log(data);
      console.log(error);
      console.log(userToken);
    }
  }, [createSuborderMutation, data, error, dispatch, userToken]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
            {mealsOrder.map(({ id, count }) => {
              const { name, price } = getMealById(id, meals);
              return (
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
                  <TableCell align="right">
                    {formatPrice(price, count)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={submitOrder}
        color="onyx"
        variant="contained"
        //endIcon={<AddShoppingCartIcon />}git
        sx={{
          justifyContent: "center",
          alignItems: "center",
          textTransform: "none",
          height: 35,
          bgcolor: "onyx",
          marginTop: 6,
        }}
      >
        Objednat
      </Button>
    </div>
  );
};

export default CheckoutPage;
