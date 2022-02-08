import { render } from '@testing-library/react';

import FoodCard from './food-card';

describe('FoodCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FoodCard />);
    expect(baseElement).toBeTruthy();
  });
});
