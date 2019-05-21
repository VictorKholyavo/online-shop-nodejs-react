import React, {Component} from "react";
import AuthService from "../components/AuthService";
import "./header.css";
import {Button, Navbar} from "react-bootstrap";

const Auth = new AuthService();

class Header extends Component {
	handleLogout() {
		Auth.logout();
		this.props.history.replace("/login");
	}

	render() {
		return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="products">
					<img
						alt=""
						src="../bag.svg"
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>
					{' Online shop'}
				</Navbar.Brand>
				<div className="button-container">
					<Button type="button" onClick={this.handleLogout.bind(this)}>Logout</Button>
				</div>
			</Navbar>
		)
		// return (
		// 	<div className="header-container">
		// 		<header>
		// 			<h1>Hello, {this.props.user.username}</h1>
		// 			<div className="button-container">
		// 				<Button type="button" onClick={this.handleLogout.bind(this)}>Logout</Button>
		// 			</div>
		// 		</header>
		// 	</div>
		// );
	}
}

export default Header;
