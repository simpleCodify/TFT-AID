import React, { Component } from "react";
import data from "../data/champions.json";
import ChampionCard from "./ChampionCard";

import { Row, Col } from 'react-bootstrap';

class TeamBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      championData: data,
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
    ));

		console.log("Champion Data inside Team Builder", championData)
    return (
			<div className="text-center teambuilder-box">
				<h1>Team Builder</h1>

				<Row>
					<Col sm={12} md={4}>
						<div className="champion-table">
							<h1>Champion List</h1>
						</div>
					</Col>

					<Col sm={12} md={4}>
						<div className="team-table">
							<h1>Team List</h1>
						</div>
					</Col>

				</Row>
			</div>
		);
  }
}

export default TeamBuilder;
