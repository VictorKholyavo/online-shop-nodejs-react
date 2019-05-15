import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import "./index.css";
import App from "./App";
import LoginView from "./LoginPage/LoginView";

const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
		<div>
			<Route exact path="/" component={App}/>
			<Route exact path="/login" component={LoginView}/>
		</div>
	</Router>,
	document.getElementById("root"));
