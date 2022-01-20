import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import burgerUrl from "../static/burger.jpeg";
import Counter from "./Counter";
import { getMealById, getDrinkById } from "../utils/utils";
import { useSelector } from "react-redux";

export const SwipeableBottomDrawer = ({
  showDrawer = false,
  setShowDrawer,
  isMeal,
  handleAddToBag,
  currentlyOpenedItemId,
  image,
}) => {
  const currentTypeItems = useSelector((state) =>
    isMeal ? state?.meals?.meals : state?.drinks?.drinks
  );

  const [currentlySelectedItem, setCurrentlySelectedItem] =
    React.useState(null);
  const currentTypeOrder = useSelector((state) =>
    isMeal ? state?.meals?.mealOrder : state?.drinks?.drinksOrder
  );
  const currentItemInOrder = useSelector((state) =>
    state?.drinks?.drinkOrder?.find(({ id }) => id === currentlyOpenedItemId)
  );
  const [isAdditionalOrderInfo, setIsAdditionalOrderInfo] =
    React.useState(false);
  const [additionalorderInfo, setAdditionalOrderInfo] = React.useState(null);
  const [currentItemCount, setCurrentItemCount] = React.useState(1);
  const toggleDrawer =
    (open, id = null) =>
    (event) => {
      if (open) {
        const maybeItem = isMeal
          ? getMealById(currentlyOpenedItemId, currentTypeOrder)
          : getDrinkById(currentlyOpenedItemId, currentTypeOrder);
        setIsAdditionalOrderInfo(false);
        setCurrentItemCount(maybeItem?.count ?? 1);
      }
      setShowDrawer(open);
    };

  React.useEffect(() => {
    const selectedItem = isMeal
      ? getMealById(currentlyOpenedItemId, currentTypeItems)
      : getDrinkById(currentlyOpenedItemId, currentTypeItems);
    setCurrentlySelectedItem(selectedItem);
    setCurrentItemCount(currentItemInOrder?.count ?? 1);
  }, [
    currentlyOpenedItemId,
    setCurrentItemCount,
    currentTypeItems,
    currentItemInOrder,
    isMeal,
  ]);

  return (
    <React.Fragment>
      <SwipeableDrawer
        anchor="bottom"
        open={showDrawer}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiPaper-root": {
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          },
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <Box
          sx={{
            // borderTopLeftRadius: 8,
            // borderTopRightRadius: 8,
            // height: 500,
            // width: "auto",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
          role="presentation"
          //onClick={toggleDrawer(anchor, false)}
          //onKeyDown={toggleDrawer(anchor, false)}
        >
          <Box
            sx={{
              width: 30,
              height: 6,
              bgcolor: "onyxDarker.main",
              borderRadius: 3,
              position: "absolute",
              top: 8,
              left: "calc(50% - 15px)",
            }}
          />
          {image && (
            <Paper variant="outlined">
              <img
                style={{
                  width: "100%",
                  height: 220,
                  borderTopLeftRadius: 20,
                }}
                src={burgerUrl}
                alt="burger"
              />
            </Paper>
          )}
          <div
            style={
              image
                ? { margin: 10 }
                : { marginInline: 16, marginTop: 30, marginBottom: 16 }
            }
          >
            <Typography
              component="div"
              variant="h4"
              //TODO Why is sx prop adding extra margin and style prop not???
              //because my default spacing is 8px can be adjusted in theme - responsiveness
              sx={{ fontSize: 20 }}
            >
              {currentlySelectedItem?.name}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
              style={{ marginBlock: 5 }}
            >
              {isMeal
                ? "100 % hovadzie maso, domaca slaninka, vajicko, majoneza, ponozky, belgicke hranolky, domaci syrovy dip"
                : `${currentlySelectedItem?.amount} L`}
            </Typography>
            <FormControlLabel
              checked={isAdditionalOrderInfo}
              size="small"
              control={<Checkbox />}
              label={
                <Typography variant="body2" color="textSecondary">
                  Pridat specialnu poziadavku
                </Typography>
              }
              onChange={() => setIsAdditionalOrderInfo(!isAdditionalOrderInfo)}
              // sx={{ width: "0%" }}
            />
            {/* <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Minimum 3 rows"
                style={{ width: "100%" }}
              /> */}
            {isAdditionalOrderInfo && (
              <TextField
                id="outlined-multiline-flexible"
                //placeholder="Multiline"
                multiline
                maxRows={5}
                sx={{ width: "100%" }}
                inputProps={{ style: { fontSize: 12 } }}
                //value={additionalorderInfo}
                //onChange={handleChange}
                onBlur={(e) => setAdditionalOrderInfo(e.target.value)}
              />
            )}
            <div
              style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Counter
                id={currentlyOpenedItemId}
                count={currentItemCount}
                onAddButtonClick={() =>
                  setCurrentItemCount(currentItemCount + 1)
                }
                onRemoveButtonClick={() => {
                  if (currentItemCount === 1) {
                    return;
                  }
                  setCurrentItemCount(currentItemCount - 1);
                }}
              />
              <Button
                onClick={() =>
                  handleAddToBag({
                    id: currentlyOpenedItemId,
                    count: currentItemCount,
                    additionalOrderInfo: additionalorderInfo ?? undefined,
                  })
                }
                color="grayInactive"
                variant="contained"
                //endIcon={<AddShoppingCartIcon />}
                sx={{
                  textTransform: "none",
                  height: 35,
                  bgcolor: "onyx",
                  marginLeft: 2,
                }}
              >
                Pridat do kosika
              </Button>
            </div>
          </div>
        </Box>
      </SwipeableDrawer>
    </React.Fragment>
  );
};
