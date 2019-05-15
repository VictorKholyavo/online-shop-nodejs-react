import React, {Component} from "react";
import FormProductService from "../../components/FormProductService";
import TypeFormComponent from "./TypeFormComponent";
import ManufacturerFormComponent from "./ManufacturerFormComponent";
import ProductFormComponent from "./ProductFormComponent";

class FormView extends Component {
	constructor() {
		super();
		this.FormService = new FormProductService();
		this.handleChange = this.handleChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.state = {
			loading: false,
			typeTitle: "",
			manufacturerTitle: "",
			types: [],
			manufacturers: [],
			productInfo: {
				productName: "",
				productPrice: "",
				productType: "",
				productManufacturer: ""
			}
		};
	}

	componentDidMount() {
		let types = [];
		let manufacturers = [];
		this.setState({loading: true});
		Promise.all([
			this.FormService.getTypes(),
			this.FormService.getManufacturers()
		]).then(([typesServer, manufacturersServer]) => {
			types = typesServer.map(type => type);
			manufacturers = manufacturersServer.map(manufacturer => manufacturer);
			this.setState(
				{
					types: types,
					manufacturers: manufacturers,
					loading: false
				}
			);
		});
	}

	handleChange(event) {
		const {name, value} = event.target;
		if (event.target.className.split(" ")[0] === "product") {
			this.setState(state => (
				{
					productInfo: Object.assign({}, state.productInfo, {
						[name]: value
					})
				}
			));
		} else {
			this.setState({
				[name]: value
			});
		}
	}

	handleFormSubmit(event) {
		event.preventDefault();
		if (event.target.name === "addType") {
			this.FormService.addType(this.state.typeTitle)
				.then(() => {
					this.setState({typeTitle: ""});
				})
				.catch(err => {
					alert(err);
				});
		} else if (event.target.name === "addManufacturer") {
			this.FormService.addManufacturer(this.state.manufacturerTitle)
				.then(() => {
					this.setState({manufacturerTitle: ""});
				})
				.catch(err => {
					alert(err);
				});
		} else if (event.target.name === "addProduct") {
			this.FormService.addProduct(this.state.productInfo)
				.then(() => {
					this.setState(state => (
						{
							productInfo: Object.assign({}, state.productInfo, {
								productName: "",
								productPrice: "",
								productType: "",
								productManufacturer: ""
							}),
							loading: false
						}
					))
				})
		}
	}

	render() {
		const loading = this.state.loading ? <p>Loading ...</p>
			: <ProductFormComponent
				productInfo={this.state.productInfo}
				types={this.state.types}
				manufacturers={this.state.manufacturers}
				handleChange={this.handleChange}
				handleFormSubmit={this.handleFormSubmit}
			/>;

		return (
			<div>
				<TypeFormComponent
					typeTitle={this.state.typeTitle}
					handleChange={this.handleChange}
					handleFormSubmit={this.handleFormSubmit}
				/>
				<ManufacturerFormComponent
					manufacturerTitle={this.state.manufacturerTitle}
					handleChange={this.handleChange}
					handleFormSubmit={this.handleFormSubmit}
				/>
				<div>
					{loading}
				</div>
			</div>
		);
	}
}

export default FormView;