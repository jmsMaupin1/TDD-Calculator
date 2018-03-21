import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Renders a number when number is first thing pressed', () => {
	it('Renders 1 when the 1 button is pressed', ()=>{
		let wrapper = shallow(<App/>);
		wrapper.find('button[children="1"]')
			.simulate('click');

		expect(wrapper.find('#display>h2[children=1]').length).toBe(1)
	})

	it('Renders 2 when the 2 button is pressed', ()=>{
		let wrapper = shallow(<App/>);
		wrapper.find('button[children="2"]')
			.simulate('click');

		expect(wrapper.find('#display>h2[children=2]').length).toBe(1)
	})

	it('Renders 3 when the 3 button is pressed', ()=>{
		let wrapper = shallow(<App/>);
		wrapper.find('button[children="3"]')
			.simulate('click');

		expect(wrapper.find('#display>h2[children=3]').length).toBe(1)
	})

	it('Renders 4 when the 4 button is pressed', ()=>{
		let wrapper = shallow(<App/>);
		wrapper.find('button[children="4"]')
			.simulate('click');

		expect(wrapper.find('#display>h2[children=4]').length).toBe(1)
	})

	it('Renders 5 when the 5 button is pressed', ()=>{
		let wrapper = shallow(<App/>);
		wrapper.find('button[children="5"]')
			.simulate('click');

		expect(wrapper.find('#display>h2[children=5]').length).toBe(1)
	})

	it('Renders 6 when the 6 button is pressed', ()=>{
		let wrapper = shallow(<App/>);
		wrapper.find('button[children="6"]')
			.simulate('click');

		expect(wrapper.find('#display>h2[children=6]').length).toBe(1)
	})

	it('Renders 7 when the 7 button is pressed', ()=>{
		let wrapper = shallow(<App/>);
		wrapper.find('button[children="7"]')
			.simulate('click');

		expect(wrapper.find('#display>h2[children=7]').length).toBe(1)
	})

	it('Renders 1 when the 8 button is pressed', ()=>{
		let wrapper = shallow(<App/>);
		wrapper.find('button[children="8"]')
			.simulate('click');

		expect(wrapper.find('#display>h2[children=8]').length).toBe(1)
	})

	it('Renders 9 when the 9 button is pressed', ()=>{
		let wrapper = shallow(<App/>);
		wrapper.find('button[children="9"]')
			.simulate('click');

		expect(wrapper.find('#display>h2[children=9]').length).toBe(1)
	})

	it('Renders 0 when the 0 button is pressed', ()=>{
		let wrapper = shallow(<App/>);
		wrapper.find('button[children="0"]')
			.simulate('click');

		expect(wrapper.find('#display>h2[children=0]').length).toBe(1)
	})
})

describe("C button replaces currentNumber to 0", ()=>{

	it('Clears 1 out after pressed by pressing C', ()=>{
		let wrapper = shallow(<App/>)
		wrapper.find('button[children="1"]')
			.simulate('click');

		wrapper.find('button[children="C"]')
			.simulate('click');

		expect(wrapper.find('#display>h2[children="0"]').length).toBe(1)
	})

	it('Clears 5 out after pressing C', ()=>{
		let wrapper = shallow(<App/>)
		wrapper.find('button[children="5"]')
			.simulate('click');

		wrapper.find('button[children="C"]')
			.simulate('click');

		expect(wrapper.find('#display>h2[children="0"]').length).toBe(1)
	})
})	