import { render } from '@testing-library/react';

import PriceTaggedItem from './price-tagged-item';

describe('PriceTaggedItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PriceTaggedItem />);
    expect(baseElement).toBeTruthy();
  });
});
