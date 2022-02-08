// import './drink-menu-page.module.css';
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart, cacheDrinks } from './drinksSlice';
// import { addDrinkToCart } from '@emenu/customer';
// import { useDrinksQuery } from '../generated/graphql';
// import DrinkCard from '@emenu/shared/shared-components';
// import './drinks-menu-page.scss';
// import { SwipeableBottomDrawer } from '@emenu/shared/shared-components';

// // STATE SHOULD BE OBJECT WITH KEYS AND THEIR QUANTITY
// // FOR EXAMPLE : { cocaCola: 2 } idk, if we should keep also 0-quantity drinks in the state
// const initialState = {
//   cocaCola: 0,
//   sprite: 0,
//   fanta: 0,
//   tonic: 0,
// };

// /* eslint-disable-next-line */
// export interface DrinkMenuPageProps {}
// export interface DrinkType {
//   id: number;
//   name: string;
//   price: number;
//   amount: number;
// }

// export function DrinkMenuPage(props: DrinkMenuPageProps) {
//   //const drinks = useSelector((state) => state.cart.drinks);
//   const { data, error, loading } = useDrinksQuery();
//   const [currentlyOpenedDrinkId, setCurrentlyOpenedDrinkId] = React.useState<
//     number | null
//   >(null);
//   const [showDrawer, setShowDrawer] = React.useState(false);
//   const dispatch = useDispatch();
//   const [drinksOrder, setDrinksOrder] = React.useState(initialState);

//   React.useEffect(() => {
//     // cache meals once its data is loaded
//     dispatch(cacheDrinks(data?.drinks));
//   }, [data, dispatch]);

//   //TODO ADD some kind of user notification that items were added into cart
//   const handleAddToBag = React.useCallback(
//     ({ id, count, additionalOrderInfo }) => {
//       dispatch(
//         addDrinkToCart({
//           id,
//           count,
//           additionalOrderInfo: additionalOrderInfo ?? undefined,
//         })
//       );
//       setShowDrawer(false);
//     },
//     [dispatch]
//   );

//   return (
//     <div className="drinks-menu-page-wrapper">
//       {data?.drinks.map(({ id, name, price, amount }: DrinkType) => (
//         <DrinkCard
//           key={id}
//           id={id}
//           onClick={(id: number) => {
//             setCurrentlyOpenedDrinkId(id);
//             setShowDrawer(true);
//           }}
//           title={name}
//           count={drinksOrder.cocaCola}
//           price={price}
//           amount={amount}
//         />
//       ))}
//       <SwipeableBottomDrawer
//         isMeal={false}
//         showDrawer={showDrawer}
//         setShowDrawer={setShowDrawer}
//         handleAddToBag={handleAddToBag}
//         currentlyOpenedItemId={currentlyOpenedDrinkId}
//       />
//     </div>
//   );
// }

// export default DrinkMenuPage;
