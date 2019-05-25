import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Catalog from "../Catalog/Catalog";
import OrdersView from "../Orders/OrdersView";
import FormView from "../AdminComponents/FormView";
import {ListGroup} from "react-bootstrap";
import "./menu.css";

class MenuView extends Component {
	render() {
		return (
			<div className="main-window">
				<Router history={this.props.history}>
					<div className="menu-container">
						<ListGroup>
							<ListGroup.Item><Link to="/products">Catalog</Link></ListGroup.Item>
							<ListGroup.Item><Link to="/orders">Orders</Link></ListGroup.Item>
							<ListGroup.Item><Link to="/form">FormView</Link></ListGroup.Item>
						</ListGroup>
					</div>
					<div className="children-container">
						<Route path="/products" component={Catalog}></Route>
						<Route path="/orders" component={OrdersView}/>
						<Route path="/form" component={FormView}/>
					</div>
				</Router>
			</div>
		);
	}
}

export default MenuView;
