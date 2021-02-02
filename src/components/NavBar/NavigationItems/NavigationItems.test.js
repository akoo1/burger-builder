import React from 'react';
import { NavLink } from 'react-router-dom';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';




// from enzyme (manually installed). Enzyme expects an adapter to be configured.
configure(
  { adapter: new Adapter() }
)


// A Test Suite
describe('<NavigationItems />', () => {

  // Test 1
  it('should render two <NavLink /> components if not authenticated', () => {
    const component = shallow(<NavigationItems />)
    expect(component.find(NavLink)).toHaveLength(2)
  })

  // Test 2
  it('should render three <NavLink /> components if authenticated', () => {
    const component = shallow(<NavigationItems isAuthenticated />)
    expect(component.find(NavLink)).toHaveLength(3)
  })

  // Test 3. contains() takes a real node, and checks if there's an exact match
  it('should render a <NavLink>Logout</NavLink> components if authenticated', () => {
    const component = shallow(<NavigationItems isAuthenticated />)
    expect(component.contains(<NavLink to='/logout' exact>Logout</NavLink>)).toEqual(true)
  })


})