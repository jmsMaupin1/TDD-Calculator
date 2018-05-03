import React from 'react';
import ReactDOM from 'react-dom';
import Button from './index.js';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter() });

it("Calls a passed in function when clicked with its props.val passed as a param", () => {
	const mockFn = jest.fn();
	let button = shallow(<Button handleClick={mockFn} val='' />)
	button.simulate('click');
	
	expect(mockFn.mock.instances.length).toBe(1)

})