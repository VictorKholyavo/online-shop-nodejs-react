import React, {Component} from "react";
import ReactDOM from "react-dom";
import "webix/webix.js";
import "webix/webix.css";
import * as webix from "webix/webix.js";
window.webix = webix; // make webix global again

class TableView extends Component {
	constructor(props) {
		super(props);
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
		const grid = {
			view: "datatable",
			id: "grid",
			scroll: false,
			select: true,
			columns: [
				{"id": "name", header: "Name", fillspace: true},
				{"id": "price", header: "Price"},
				{"id": "type", header: "Type", fillspace: true, template: (obj) => obj.type.title},
				{"id": "manufacturer", header: "Manufacturer",  fillspace: true, template: (obj) => obj.manufacturer.title},
				{"id": "rating", header: "Rating"}
			]
		};
		this.ui = window.webix.ui({
			cols: [grid],
			isolate: true,
			container: ReactDOM.findDOMNode(this.refs.root)
		});
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