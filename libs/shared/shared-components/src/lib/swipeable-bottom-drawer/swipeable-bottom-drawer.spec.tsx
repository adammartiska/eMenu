import { render } from '@testing-library/react';

import SwipeableBottomDrawer from './swipeable-bottom-drawer';

describe('SwipeableBottomDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SwipeableBottomDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
