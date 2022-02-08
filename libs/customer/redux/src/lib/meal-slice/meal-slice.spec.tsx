import { render } from '@testing-library/react';

import MealSlice from './meal-slice';

describe('MealSlice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MealSlice />);
    expect(baseElement).toBeTruthy();
  });
});
