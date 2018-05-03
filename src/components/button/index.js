import React, { Component } from 'react';
import "./button.css";

export default class Button extends Component {
	render() {
		return (
			<div onClick={this.props.handleClick.bind(this)} 
				className={"button " + (this.props.expanded ? "col-lg-6" : "col-lg-3")}
				style={{backgroundColor: this.props.bgColor ? this.props.bgColor : "white"}}>
				{this.props.val}
			</div>
		);
	}
}
