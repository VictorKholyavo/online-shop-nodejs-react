import React from "react";
import "./form.css";

function ProductFormComponent(props) {
	let optionForType = props.types.map(type => {
		return <option key={type.id} value={type.id} className="product">{type.title}</option>
	});
	let optionForManufacturer = props.manufacturers.map(manufacturer => {
		return <option key={manufacturer.id} value={manufacturer.id} className="product">{manufacturer.title}</option>
	});
	return (
		<div className="form-container product-form-container">
			<div className="form-inner">
				<form>
					<h1 className="form-title">New product</h1>
					<input
						className="product admin-form-item"
						placeholder="Name goes here..."
						value={props.productInfo.productName}
						name="productName"
						type="text"
						onChange={props.handleChange}
					/>
					<input
						className="product admin-form-item"
						placeholder="Price goes here..."
						value={props.productInfo.productPrice}
						name="productPrice"
						type="text"
						onChange={props.handleChange}
					/>
					<div className="select-container">
						<label>Choose type of product:</label>
						<select name="productType" onChange={props.handleChange} value={props.productInfo.productType} className="product">
							<option value="select">...Select</option>
							{optionForType}
						</select>
					</div>
					<div className="select-container">
						<label>Choose manufacturer of product:</label>
						<select name="productManufacturer" onChange={props.handleChange} value={props.productInfo.productManufacturer} className="product">
							<option value="select">...Select</option>
							{optionForManufacturer}
						</select>
					</div>
					<input
						className="admin-form-submit"
						value="Add product"
						name="addProduct"
						type="submit"
						onClick={props.handleFormSubmit}
					/>
				</form>
			</div>
		</div>

	);
}

export default ProductFormComponent;