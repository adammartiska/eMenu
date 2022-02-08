import { render } from '@testing-library/react';

import AdminPages from './admin-pages';

describe('AdminPages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminPages />);
    expect(baseElement).toBeTruthy();
  });
});
