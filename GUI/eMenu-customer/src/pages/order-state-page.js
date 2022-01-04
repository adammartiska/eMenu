import Counter from "../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { incrementCount, decrementCount } from "./drinksSlice";
import { getMealById } from "../utils/utils";
import { useCreateSuborderMutation } from "../generated/graphql";
import "./drinks-menu-page.scss";

const formatPrice = (price, count) => {
  return `${(price * count).toFixed(2)} €`;
};

const OrderStatePage = () => {
  const [createSuborderMutation, { data, loading, error }] =
    useCreateSuborderMutation({
      variables: {
        tableId: 17,
        meals: [{ id: 1, count: 2 }],
        drinks: [{ id: 1, count: 3 }],
        token: "bpTtlPuC",
      },
    });
  const drinks = useSelector((state) => state?.drinks?.drinkOrder);
  const mealsOrder = useSelector((state) => state?.meals?.mealOrder);
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
    console.log(response);
    console.log(data);
    console.log(error);
  }, [createSuborderMutation, data, error]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "space-between",
      }}
    >
      <Typography
        component="div"
        variant="h4"
        //TODO Why is sx prop adding extra margin and style prop not???
        //because my default spacing is 8px can be adjusted in theme - responsiveness
        sx={{ fontSize: 20 }}
      >
        Stav objednavky
      </Typography>
      <Typography
        component="div"
        variant="h4"
        //TODO Why is sx prop adding extra margin and style prop not???
        //because my default spacing is 8px can be adjusted in theme - responsiveness
        sx={{ fontSize: 20, bgcolor: "orange", padding: 2, borderRadius: 2 }}
      >
        Prijata
      </Typography>
      <Divider variant="middle" flexItem />
      <div>ahoj</div>
      {/* <TableContainer component={Paper}>
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
      </Button> */}
    </div>
  );
};

export default OrderStatePage;
