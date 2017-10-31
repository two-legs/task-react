import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from '../NotFoundPage';

describe('<NotFoundPage />', () => {
  it('should render without throwing error', () => {
    const page = shallow(<NotFoundPage />);
    expect(page.find('EmptyResult').length).toBe(1);
  });
});