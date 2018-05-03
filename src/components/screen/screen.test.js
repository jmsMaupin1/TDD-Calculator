import React from 'react';
import ReactDOM from 'react-dom';
import Screen from './index.js';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter() });

it("Should display text passed into the screen component", () => {
	let screen = shallow(<Screen>test</Screen>);

	expect(screen.find(".calc-number[children='test']").length).toBe(1);
})