// These tests are brought to you using the magic from:
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter() })

// Helper Functions - saving those keystrokes, RSI man.
function clickButton(wrapper, selector) {
	wrapper.find(`.button[children="${selector}"]`).simulate('click')
}

function assertScreenToBe(wrapper, assertion) {
	expect(wrapper.find('.calc-screen').text()).toBe(assertion)	
}

// The actual Test
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})


it('Add two numbers together', () => {
	let wrapper = mount(<App/>)
	clickButton(wrapper, 1)
	clickButton(wrapper, "+")
	clickButton(wrapper, 2)
	clickButton(wrapper, "=")

	assertScreenToBe(wrapper, "3")
})

it('Subtracts one number from another', () => {
	let wrapper = mount(<App/>)
	clickButton(wrapper, 5)
	clickButton(wrapper, "-")
	clickButton(wrapper, 8)
	clickButton(wrapper, "=")

	assertScreenToBe(wrapper, "-3")
})

it('multiplies two numbers', () => {
	let wrapper = mount(<App/>)
	clickButton(wrapper, 2)
	clickButton(wrapper, "X")
	clickButton(wrapper, 7)
	clickButton(wrapper, "=")

	assertScreenToBe(wrapper, "14")
})

it('Divides one number from another', ()=> {
	let wrapper = mount(<App/>)
	clickButton(wrapper, 1)
	clickButton(wrapper, "÷")
	clickButton(wrapper, 2)
	clickButton(wrapper, "=")

	assertScreenToBe(wrapper, "0.5")
})

it('Can negate a number', () => {
	let wrapper = mount(<App/>)
	clickButton(wrapper, 1)
	clickButton(wrapper, "±")

	assertScreenToBe(wrapper, "-1")
})

it('can find the modulus of two numbers', () => {
	let wrapper = mount(<App/>)
	clickButton(wrapper, 4)
	clickButton(wrapper, "%")
	clickButton(wrapper, 3)
	clickButton(wrapper, "=")

	assertScreenToBe(wrapper, "1")
})

it('can chain multiple operations together', ()=> {
	let wrapper = mount(<App/>)
	clickButton(wrapper, 4)
	clickButton(wrapper, "+")
	clickButton(wrapper, 3)
	clickButton(wrapper, "-")
	clickButton(wrapper, 5)
	clickButton(wrapper, "X")
	clickButton(wrapper, 2)
	clickButton(wrapper, "÷")
	clickButton(wrapper, 4)
	clickButton(wrapper, "=")

	assertScreenToBe(wrapper, "1")
})

