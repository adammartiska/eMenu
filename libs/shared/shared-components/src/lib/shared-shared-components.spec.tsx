import { render } from '@testing-library/react';

import SharedSharedComponents from './shared-shared-components';

describe('SharedSharedComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedSharedComponents />);
    expect(baseElement).toBeTruthy();
  });
});
