import React, {Component} from "react";
import ReactDOM from "react-dom";
import "webix/webix.js";
import "webix/webix.css";
import * as data from "./data";
import * as webix from "webix/webix.js";
window.webix = webix; // make webix global again

class TableView extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: props
		};
	}
	render() {
		return (
			<div ref="root" style={{height: "100%"}}></div>
		);
	}

	componentDidMount() {
		let data1 = [
			{ id:1, title:"The Shawshank Redemption", year:1994, votes:678790 },
			{ id:2, title:"The Godfather", year:1972, votes:511495 },
			{ id:3, title:"The Godfather: Part II", year:1974, votes:319352 }
		]
		const grid = {
			view: "datatable",
			id: "grid",
			scroll: false,
			select: true,
			columns: [
				{"id": "name", header: "Name", fillspace: true},
				{"id": "price", header: "Price"},
				{"id": "type", header: "Type",  fillspace: true},
				{"id": "manufacturer", header: "Manufacturer",  fillspace: true},
				{"id": "rating", header: "Rating"}
			]
		};
		this.ui = window.webix.ui({
			cols: [
				grid
			],
			isolate: true,

			container: ReactDOM.findDOMNode(this.refs.root)
		});
		console.log(this.state.data.data);
		this.ui.$$("grid").parse(this.state.data.data);
	}

	componentWillUnmount(){
		this.ui.destructor();
		this.ui = null;
	}

	shouldComponentUpdate() {
		return false;
	}

}

export default TableView;