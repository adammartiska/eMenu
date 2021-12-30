import BottomNavigation from "@mui/material/BottomNavigation";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const BottomNavigator = ({ onRouteChange, currentRoute }) => {
  const drinks = useSelector((state) => state.drinks.drinkOrder);
  const meals = useSelector((state) => state.meals.mealOrder);
  return (
    <BottomNavigation
      sx={{
        bgcolor: "#F1F1F1",
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
      showLabels
      value={currentRoute}
      onChange={onRouteChange}
    >
      <BottomNavigationAction
        sx={{
          color: "onyx.font",
          "&.Mui-selected": {
            color: "secondary.main",
          },
        }}
        icon={<LocalBarIcon />}
        label="Napoje"
        component={Link}
        to="/drinks"
      />
      <BottomNavigationAction
        sx={{
          color: "onyx.font",
          "&.Mui-selected": {
            color: "secondary.main",
          },
        }}
        label="Jedla"
        component={Link}
        to="/food"
        icon={<RestaurantIcon />}
      />
      <BottomNavigationAction
        sx={{
          color: "onyx.font",
          "&.Mui-selected": {
            color: "secondary.main",
          },
        }}
        label="Kosik"
        component={Link}
        to="/cart"
        icon={
          <Badge
            badgeContent={
              Object.keys(drinks).length + Object.keys(meals).length
            }
            color={
              // this is kinda bad, TODO replace it with url content, but for now this is how MUI works
              // returning index of route
              currentRoute === 2 ? "onyx" : "secondary"
            }
          >
            <ShoppingBasketIcon />
          </Badge>
        }
      />
    </BottomNavigation>
  );
};

export default BottomNavigator;
