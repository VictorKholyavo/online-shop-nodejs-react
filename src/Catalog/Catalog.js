import React, {Component} from "react";
import CatalogService from "../components/CatalogService";
import {Pagination} from "react-bootstrap";
import CatalogComponent from "../components/ProductView";

class Catalog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			data: [],
			offset: 0,
			perPage: 9,
			pageCount: 0
		};
		this.CatalogService = new CatalogService();
	}

	componentDidMount() {
		this.setState({loading: true});
		let data = {offset: this.state.offset, limit: this.state.perPage};
		this.CatalogService.getProducts(data).then(data => {
			this.setState({
				data: data.data,
				pageCount: Math.ceil(data.total_count / this.state.perPage),
				loading: false
			});
		});
	}

	// handlePageClick = data => {
	// 	let selected = data.selected;
	// 	let offset = Math.ceil(selected * this.props.perPage);
	//
	// 	this.setState({ offset: offset }, () => {
	// 		this.loadProducts();
	// 	});
	// };

	render() {
		const catalog = this.state.loading ? <p>Loading...</p>
			: <CatalogComponent data={this.state.data} pageCount={this.state.pageCount}/>;
		return (
			<div>
				{catalog}
			</div>
		);
	}
}

export default Catalog;