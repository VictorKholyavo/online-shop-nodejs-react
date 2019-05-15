import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import ProductsView from "../Products/ProductsView";
import OrdersView from "../Orders/OrdersView";
import FormView from "../AdminComponents/FormView";
import TableView from "../TableView";
import "./menu.css";

class MenuView extends Component {
	render() {
		return (
			<div className="main-window">
				<Router history={this.props.history}>
					<div className="menu-container">
						<ul>
							<li><Link to="/products">Products</Link></li>
							<li><Link to="/orders">Orders</Link></li>
							<li><Link to="/form">FormView</Link></li>
						</ul>
					</div>
					<div className="children-container">
						<Route path="/products" component={ProductsView}/>
						<Route path="/orders" component={OrdersView}/>
						<Route path="/form" component={FormView}/>
					</div>
				</Router>
			</div>
		);
	}
}

export default MenuView;
