import { render } from '@testing-library/react';

import CheckoutItem from './checkout-item';

describe('CheckoutItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckoutItem />);
    expect(baseElement).toBeTruthy();
  });
});
