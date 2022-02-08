import { render } from '@testing-library/react';

import OrderSlice from './order-slice';

describe('OrderSlice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrderSlice />);
    expect(baseElement).toBeTruthy();
  });
});
