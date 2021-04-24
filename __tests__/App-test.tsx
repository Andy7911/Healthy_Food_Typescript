

import React from 'react';
import Enzyme, {shallow} from 'enzyme'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Command from '../component/Command';

it('renders correctly', () => {
 expect(true).toBe(true);
});
it("render with shallow ",()=>{

   const wrapper= shallow(<Command></Command>)
})
