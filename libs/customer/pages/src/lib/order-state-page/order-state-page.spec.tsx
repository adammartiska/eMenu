import { render } from '@testing-library/react';

import OrderStatePage from './order-state-page';

describe('OrderStatePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrderStatePage />);
    expect(baseElement).toBeTruthy();
  });
});
