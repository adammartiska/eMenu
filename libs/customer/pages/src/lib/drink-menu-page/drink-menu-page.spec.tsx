import { render } from '@testing-library/react';

import DrinkMenuPage from './drink-menu-page';

describe('DrinkMenuPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DrinkMenuPage />);
    expect(baseElement).toBeTruthy();
  });
});
