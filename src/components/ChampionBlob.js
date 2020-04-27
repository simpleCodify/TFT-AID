import React from "react";
import { ListGroup } from 'react-bootstrap';
import { Draggable } from 'react-beautiful-dnd';

function ChampionBlob(props) {
	const { name } = props;
	console.log("PROPS inside CHAMPBLOB", props)
	return (
		<ListGroup>
				<ListGroup.Item className="text-center mx-auto">{name}</ListGroup.Item>
		</ListGroup>
	)
}

export default ChampionBlob;