import React from "react";
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default class Menu extends React.Component {
	constructor() {
		super();
	}
	
	render() {
		return (
			<div className="menu">
				<Navbar inverse collapseOnSelect background="#C788CC">
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#brand">Welcome to Chatter</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem eventKey={1} href="#">
								About
							</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}