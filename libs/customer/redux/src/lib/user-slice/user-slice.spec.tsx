import { render } from '@testing-library/react';

import UserSlice from './user-slice';

describe('UserSlice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserSlice />);
    expect(baseElement).toBeTruthy();
  });
});
