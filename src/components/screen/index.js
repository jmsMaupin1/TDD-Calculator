import React, { Component } from 'react';
import "./screen.css";

export default class Screen extends Component {
	render() {
		return (
			<div className="calc-screen row">
				<span className="calc-number">{this.props.children ? this.props.children : 0}</span>
			</div>
		);
	}
}
