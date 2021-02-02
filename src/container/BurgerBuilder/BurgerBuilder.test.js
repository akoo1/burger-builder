import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// We need to use name export here because the BurgerBuilder's default export is connected to Redux
import { BurgerBuilder } from './BurgerBuilder';
import BuildControlsList from '../../components/Burger/BuildControlsList/BuildControlsList';



// from enzyme (manually installed). Enzyme expects an adapter to be configured.
configure(
  { adapter: new Adapter() }
)


// A Test Suite 
describe('<BurgerBuilder />', () => {

  // Test 1 
  it('should render <BuildControls /> when receiving ingredients', () => {
    const component = shallow(<BurgerBuilder ingredients={{salad: 0}} />)
    expect(component.find(BuildControlsList)).toHaveLength(1)
  })
})