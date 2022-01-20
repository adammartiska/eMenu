import { render } from '@testing-library/react';

import Counter from './counter';

describe('Counter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Counter />);
    expect(baseElement).toBeTruthy();
  });
});
