import { render } from '@testing-library/react';

import DrinkCard from './drink-card';

describe('DrinkCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DrinkCard />);
    expect(baseElement).toBeTruthy();
  });
});
