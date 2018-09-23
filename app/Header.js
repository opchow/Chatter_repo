import React from "react";
import Menu from "./Menu";

export default class Header extends React.Component {
	constructor() {
		super();
	}
	
	render() {
		return (
			<div className="innerheader">
				<div className="logo" >
					<img src="assets/chatter_logo.png" 
					style={{
						height: 72
					}}
					></img>
				</div>
				<Menu/>
			</div>
		);
	}
}