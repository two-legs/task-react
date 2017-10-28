import React from 'react';
import { shallow } from 'enzyme';

import ContentWrapper from '../ContentWrapper';

describe('<ContentWrapper />', () => {
  it('should render without throwing error', () => {
    const wrapper = shallow(<ContentWrapper><div>content</div></ContentWrapper>);

    expect(wrapper.contains(<div>content</div>)).toBe(true);
  });
});
