import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  it('should render without throwing error', () => {
    const store = { item: 1 };
    const app = shallow(<App store={store} />);
    expect(app.find('Provider').prop('store')).toEqual(store);
    expect(app.find('BrowserRouter').length).toBe(1);
  });
});