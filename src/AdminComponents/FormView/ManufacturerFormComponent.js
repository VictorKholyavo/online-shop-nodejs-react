import React from "react";
import "./form.css";

function ManufacturerFormComponent(props) {
	return (
		<div className="form-container">
			<div className="form-inner">
				<form>
					<h1 className="form-title">New Manufacturer</h1>
					<input
						className="admin-form-item"
						placeholder="Manufacturer title goes here..."
						value={props.manufacturerTitle}
						name="manufacturerTitle"
						type="text"
						onChange={props.handleChange}
					/>
					<input
						className="admin-form-submit"
						value="Add manufacturer"
						name="addManufacturer"
						type="submit"
						onClick={props.handleFormSubmit}
					/>
				</form>
			</div>
		</div>
	);
}

export default ManufacturerFormComponent;