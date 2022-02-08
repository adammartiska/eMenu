import BottomNavigation from '@mui/material/BottomNavigation';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export interface IBottomNavigatorProps {
  onRouteChange: (event: any, nieco: any) => void;
  currentRoute?: string;
}

const BottomNavigator: React.FC<IBottomNavigatorProps> = ({
  onRouteChange,
  currentRoute,
}) => {
  const drinks = useSelector((state: any) => state?.order?.inCart?.drinks);
  const meals = useSelector((state: any) => state?.order?.inCart?.meals);
  return (
    <BottomNavigation
      sx={{
        bgcolor: 'onyx.main',
        width: '100%',
        position: 'fixed',
        bottom: 0,
      }}
      showLabels
      value={currentRoute}
      onChange={onRouteChange}
    >
      <BottomNavigationAction
        sx={{
          color: 'onyx.fontInactive',
          '&.Mui-selected': {
            color: 'onyx.fontActive',
          },
        }}
        icon={<LocalBarIcon />}
        label="Napoje"
        component={Link}
        to="/drinks"
      />
      <BottomNavigationAction
        sx={{
          color: 'onyx.fontInactive',
          '&.Mui-selected': {
            color: 'onyx.fontActive',
          },
        }}
        label="Jedla"
        component={Link}
        to="/food"
        icon={<RestaurantIcon />}
      />
      <BottomNavigationAction
        sx={{
          color: 'onyx.fontInactive',
          '&.Mui-selected': {
            color: 'onyx.fontActive',
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
            // color={
            //   // this is kinda bad, TODO replace it with url content, but for now this is how MUI works
            //   // returning index of route
            //   currentRoute === 2 ? 'fontInactive' : 'fontActive'
            // }
          >
            <ShoppingBasketIcon />
          </Badge>
        }
      />
    </BottomNavigation>
  );
};

export default BottomNavigator;
