import React, {Component} from "react";
import "./login.css";
import AuthService from "../components/AuthService";
import RegistrationComponent from "./RegistrationComponent";
import LoginComponent from "./LoginComponent";

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
		let type = this.state.loginOrRegister === "login"
			? <LoginComponent handleChange={this.handleChange} handleFormSubmit={this.handleFormSubmit}/>
			: <RegistrationComponent handleChange={this.handleChange} handleFormSubmit={this.handleFormSubmit}/>;

		return (
			<div className="center">
				<div className="radio-buttons">
					<label>
						<input
							type="radio"
							name="loginOrRegister"
							value="login"
							checked={this.state.loginOrRegister === "login"}
							onChange={this.handleChange}
						/> Log in
					</label>
					<br/>
					<label>
						<input
							type="radio"
							name="loginOrRegister"
							value="register"
							checked={this.state.loginOrRegister === "register"}
							onChange={this.handleChange}
						/> Register
					</label>
				</div>
				{type}
			</div>
		);
	}

	handleChange(event) {
		const {name, value} = event.target;
		this.setState(
			{
				[event.target.name]: event.target.value
			}
		);
	}

	handleFormSubmit(event) {
		event.preventDefault();
		if (event.target.name === "registerButton") {
			this.Auth.register(this.state.email, this.state.username, this.state.password)
				.then(res => {
					this.props.history.replace("/");
				})
				.catch(err => {
					alert(err);
				});
		} else {
			this.Auth.login(this.state.email, this.state.password)
				.then(res => {
					this.props.history.replace("/");
				})
				.catch(err => {
					alert(err);
				});
		}
	}
}

export default LoginView;
