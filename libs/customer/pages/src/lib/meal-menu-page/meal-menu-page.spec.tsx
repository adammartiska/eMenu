import { render } from '@testing-library/react';

import MealMenuPage from './meal-menu-page';

describe('MealMenuPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MealMenuPage />);
    expect(baseElement).toBeTruthy();
  });
});
