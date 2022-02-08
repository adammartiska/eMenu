import { render } from '@testing-library/react';

import DrinkSlice from './drink-slice';

describe('DrinkSlice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DrinkSlice />);
    expect(baseElement).toBeTruthy();
  });
});
