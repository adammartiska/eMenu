import { render } from '@testing-library/react';

import CustomerRedux from './customer-redux';

describe('CustomerRedux', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomerRedux />);
    expect(baseElement).toBeTruthy();
  });
});
