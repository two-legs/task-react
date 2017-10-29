import React from 'react';
import { shallow } from 'enzyme';

import PageHeader from '../PageHeader';

describe('<PageHeader />', () => {
  it('should render without throwing error', () => {
    const header = shallow(<PageHeader><div>content</div></PageHeader>);

    expect(header.find('Header').length).toBe(1);
    expect(header.find('Header').contains(<div>content</div>)).toBe(true);
  });

  it('should render with buttons', () => {
    const buttons = [<button key="one">one</button>, <button key="two">two</button>];
    const header = shallow(<PageHeader buttons={buttons} />);

    expect(header.find('button').length).toBe(2);
  });
});