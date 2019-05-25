import React, {useState} from "react";
import ProductBlock from "./ProductBlock";
import {Pagination} from "react-bootstrap";

function CatalogComponent(data, pageCount) {
	// const [data, setData] = useState([]);
	let products = data.data.map((product, index) => {
		return <ProductBlock key={product.id} productInfo={product}/>
	});
	let pagination = "s";
	return (
		<div className="catalog-container">
			{products}
		</div>
	)
}

export default CatalogComponent;
