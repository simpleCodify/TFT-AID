import React, { useState } from 'react';
import { getChampionPortrait, getPortraitBorder, manaBarCurrent, manaBarBorderRadius } from '../util.js';

import { Card, Modal, Row, Col } from 'react-bootstrap';

function ChampionCard(props) {
	const { name, cost, traits, health, mana, startingMana, armor, magicResist, dps, damage, attackSpeed, criticalRate, range } = props
	const portraitsrc = getChampionPortrait(name)
	const portraitBorder = getPortraitBorder(cost)
	const manaBar = manaBarCurrent(mana, startingMana)
	const manaBarRadius = manaBarBorderRadius(mana, startingMana)

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Card className="col-md-1 mx-3 my-3 px-0 pt-3 champ-card" onClick={handleShow}>
				<Card.Img variant="top" src={portraitsrc} className="img-responsive champ-portrait mx-auto my-auto" style={{border: portraitBorder }} />
				<Card.Body className="p-0">
						<Card.Text className="text-center">{name}</Card.Text>
				</Card.Body>
			</Card>

			<Modal show={show} onHide={handleClose} centered>
				<Modal.Title className="text-center modal-title my-2">
					<div>
						{name}
					</div>
					<div>
						<img src={portraitsrc} className="img-responsive" alt="hero-portrait" />
					</div>
				</Modal.Title>
				<Modal.Body className="modal-body">
					<Row className="text-center">
						<Col>
							<div>
								<p>{health[0]}</p>
							</div>
							<div>
								<p>{dps[0]}</p>
							</div>
							<div>
								<p>{damage[0]}</p>
							</div>
						</Col>
						<Col>
						<div>
								<p>{health[1]}</p>
							</div>
							<div>
								<p>{dps[1]}</p>
							</div>
							<div>
								<p>{damage[1]}</p>
							</div>
						</Col>
						<Col>
						<div>
								<p>{health[2]}</p>
							</div>
							<div>
								<p>{dps[2]}</p>
							</div>
							<div>
								<p>{damage[2]}</p>
							</div>
						</Col>
					</Row>
					<p>Traits: [ {traits.join(", ")} ] </p>
					<div className="mana-bar">
						<div className="mana-bar-filled" style={{ width: manaBar, backgroundColor: "blue", borderRadius: manaBarRadius }}  />
					</div>

					<p>Armor: {armor}</p>
					<p>Magic Resist: {magicResist}</p>
					<p>Attack Speed: {attackSpeed}</p>
					<p>Critical Rate: {criticalRate}%</p>
					<p>Range: {range}</p>

				</Modal.Body>
			</Modal>
		</>
	)
}

export default ChampionCard;