import React, {Component} from "react";
import FormProductService from "../components/FormProductService";
import TableView from "../TableView";
import "./products.css";

class ProductsView extends Component {
	constructor() {
		super();
		this.state = {
			loading: false,
			products: []
		};
		this.FormService = new FormProductService();
	}
	componentDidMount() {
		let products = [];
		this.setState({loading: true});
		this.FormService.getProducts()
			.then((productsFromDB) => {
				products = productsFromDB.map(product => product);
				this.setState({products: products, loading: false})
			})
	}

	render() {
		const table = this.state.loading ? <p>Loading...</p>
			: <TableView data={this.state.products}/>
		return (
			<div className="datatable-container">{table}</div>
		)
	}
}

export default ProductsView;
