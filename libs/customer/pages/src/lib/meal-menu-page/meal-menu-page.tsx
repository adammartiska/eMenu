import React from 'react';
import { useDispatch } from 'react-redux';
import { cacheMeals } from './mealsSlice';
import { addMealToCart } from './orderSlice';
import { useMealsQuery } from '../generated/graphql';
import './food-menu-page.scss';
import FoodCard, {
  SwipeableBottomDrawer,
} from '@emenu/shared/shared-components';
import './meal-menu-page.module.css';

/* eslint-disable-next-line */
export interface MealMenuPageProps {}

export interface MealType {
  id: number;
  name: string;
  price: number;
}

export const MealMenuPage: React.FC<MealMenuPageProps> = () => {
  const { data: meals, error, loading } = useMealsQuery();
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [currentlyOpenedMealId, setCurrentlyOpenedMealId] =
    React.useState(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // cache meals once its data is loaded
    dispatch(cacheMeals(meals));
  }, [meals, dispatch]);

  //TODO ADD some kind of user notification that items were added into cart
  const handleAddToBag = React.useCallback(
    ({ id, count, additionalOrderInfo }) => {
      dispatch(
        addMealToCart({
          id,
          count,
          additionalOrderInfo: additionalOrderInfo ?? undefined,
        })
      );
      setShowDrawer(false);
    },
    [dispatch]
  );
  return (
    <div className="food-menu-page-wrapper">
      {meals?.meals.map(({ id, name, price }: MealType) => (
        <FoodCard
          key={id}
          id={id}
          title={name}
          price={price}
          onClick={(id: number) => {
            setCurrentlyOpenedMealId(id);
            setShowDrawer(true);
          }}
        />
      ))}
      <SwipeableBottomDrawer
        isMeal
        image
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        handleAddToBag={handleAddToBag}
        currentlyOpenedItemId={currentlyOpenedMealId}
      />
    </div>
  );
};

export default MealMenuPage;
