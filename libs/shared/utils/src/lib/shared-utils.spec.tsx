import { render } from '@testing-library/react';

import SharedUtils from './shared-utils';

describe('SharedUtils', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUtils />);
    expect(baseElement).toBeTruthy();
  });
});
