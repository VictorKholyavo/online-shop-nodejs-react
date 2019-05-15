import React, {Component} from "react";
import AuthService from "../components/AuthService";
import "./header.css";

const Auth = new AuthService();

class Header extends Component {
	handleLogout() {
		Auth.logout();
		this.props.history.replace("/login");
	}

	render() {
		return (
			<div className="header-container">
				<header>
					<h1>Hello, {this.props.user.username}</h1>
					<div className="button-container">
						<button type="button" onClick={this.handleLogout.bind(this)}>Logout</button>
					</div>
				</header>
			</div>
		);
	}
}

export default Header;
