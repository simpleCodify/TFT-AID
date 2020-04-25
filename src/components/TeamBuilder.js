import React, { Component } from "react";
import data from "../data/champions.json";
import { Container, Row } from "react-bootstrap";

import ChampionCard from './ChampionCard';

class TeamBuilder extends Component {
    constructor(props) {
        super(props);

    const championData = data;
    this.state = {
      championData
    };
  }

  render() {
    const { championData } = this.state;		
		const renderChampCards = championData.map((ea, idx) => (
			<ChampionCard
				key={`${ea.name}-${idx}`}
				name={ea.name} 
				cost={ea.cost} 
				traits={ea.traits} 
				health={ea.health}
				mana={ea.mana}
				startingMana={ea["starting-mana"]}
				armor={ea.armor}
				magicResist={ea["magic-resist"]}
				dps={ea.dps}
				damage={ea.damage}
				attackSpeed={ea["attack-speed"]}
				criticalRate={ea["critical-rate"]}
				range={ea.range}
			/>
		))

    return (
			<div className="mx-auto col-md-10">
				<Row className="mx-auto champ-box">
					{renderChampCards}
				</Row>
			</div>
		)
  }
}

export default TeamBuilder;
