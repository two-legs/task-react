import React from 'react';
import { shallow} from 'enzyme';

import Button from '../Button';

describe('<Button />', () => {
  it('should render without throwing error', () => {
    expect(shallow(<Button />).find('button').length).toBe(1);
  })
});