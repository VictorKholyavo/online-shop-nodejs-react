import React from "react";
import "./form.css";

function TypeFormComponent(props) {
	return (
		<div className="form-container">
			<div className="form-inner">
				<form>
					<h1 className="form-title">New Type</h1>
					<input
						className="admin-form-item"
						placeholder="Type title goes here..."
						value={props.typeTitle}
						name="typeTitle"
						type="text"
						onChange={props.handleChange}
					/>
					<input
						className="admin-form-submit"
						value="Add type"
						name="addType"
						type="submit"
						onClick={props.handleFormSubmit}
					/>
				</form>
			</div>
		</div>
	);
}

export default TypeFormComponent;