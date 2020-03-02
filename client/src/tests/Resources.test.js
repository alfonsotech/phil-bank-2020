import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Resources from '../Resources'

Enzyme.configure({ adapter: new Adapter() })

describe('Resources compoment', () => {
  it('renders without crashing', () => {
    const resources = shallow(<Resources />)
    expect(resources.find('div.Resources').length).toEqual(1);
  });
});
