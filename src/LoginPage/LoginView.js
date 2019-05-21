import React, {Component} from "react";
import "./login.css";
import AuthService from "../components/AuthService";
import RegistrationComponent from "./RegistrationComponent";
import LoginComponent from "./LoginComponent";
import {Nav} from "react-bootstrap";

class LoginView extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.Auth = new AuthService();
		this.state = {
			loginOrRegister: "login"
		};
	}

	componentWillMount() {
		if (this.Auth.loggedIn())
			this.props.history.replace("/");
	}

	render() {
		let formType = this.state.loginOrRegister === "login"
			? <LoginComponent handleChange={this.handleChange} handleFormSubmit={this.handleFormSubmit}/>
			: <RegistrationComponent handleChange={this.handleChange} handleFormSubmit={this.handleFormSubmit}/>;
		return (
			<div className="login-view-container">
				<Nav variant="pills" defaultActiveKey="login" onSelect={selectedKey => this.setState({loginOrRegister: selectedKey})}>
					<Nav.Item>
						<Nav.Link eventKey="login">Login</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="register">Register</Nav.Link>
					</Nav.Item>
				</Nav>
				{formType}
			</div>
		)
	}

	handleChange(event) {
		const {name, value} = event.target;
		this.setState(
			{
				[name]: value
			}
		);
	}

	handleFormSubmit(event) {
		event.preventDefault();
		if (event.target.name === "registerButton") {
			this.Auth.register(this.state.email, this.state.username, this.state.password)
				.then(() => {
					this.props.history.replace("/");
				})
				.catch(err => {
					alert(err);
				});
		} else if(event.target.name === "loginButton"){
			this.Auth.login(this.state.email, this.state.password)
				.then(() => {
					this.props.history.replace("/");
				})
				.catch(err => {
					alert(err);
				});
		}
	}
}

export default LoginView;
