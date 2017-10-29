import React from 'react';
import { shallow } from 'enzyme';

import Icon from '../Icon';

describe('<Icon />', () => {
  it('should render without trowing error', () => {
    const icon = shallow(<Icon name="return" />);

    expect(icon.find('img').length).toBe(1);
  });

  it('should pass className to an image', () => {
    const icon = shallow(<Icon name="return" className="icon" />);

    expect(icon.find('img').hasClass('icon'));
  });
});
