import React from "react";
import "./index.css";
import {Card, Button} from "react-bootstrap";

function ProductBlock(props) {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={props.src} />
			<Card.Body>
				<Card.Title>{props.productInfo.name}</Card.Title>
				<Card.Text>
					{props.productInfo.price + " " + props.productInfo.manufacturer.title}
				</Card.Text>
				<Button variant="primary">Buy </Button>
			</Card.Body>
		</Card>
	)
}

export default ProductBlock;