import { render } from '@testing-library/react';

import CheckoutPage from './checkout-page';

describe('CheckoutPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckoutPage />);
    expect(baseElement).toBeTruthy();
  });
});
