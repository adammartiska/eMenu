import { render } from '@testing-library/react';

import CustomerPages from './customer-pages';

describe('CustomerPages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomerPages />);
    expect(baseElement).toBeTruthy();
  });
});
