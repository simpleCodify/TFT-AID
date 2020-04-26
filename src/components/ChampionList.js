import React, { Component } from "react";
import data from "../data/champions.json";
import { Row } from "react-bootstrap";

import ChampionCard from "./ChampionCard";
import SearchBar from './SearchBar';

class ChampionList extends Component {
  constructor(props) {
    super(props);

		const championData = data;
		const filtered = null

    this.state = {
			championData,
			filtered
		}
		
  }

	searchData = (e) => {
		let queryData = null;
		let filterVal = e.target.value.toLowerCase()
		console.log("Filter Value: ", filterVal)
		if (e.target.value !== "") {
			queryData = [];
			this.state.championData.forEach((champion) => {
				let traits = champion.traits.join(" ").toLowerCase();
				console.log("Traits: ", traits)
				if ((champion.name.toLowerCase().indexOf(e.target.value) !== -1) || (traits.includes(filterVal)) === true ) {
					if (queryData.length < 10) {
						queryData.push(champion);
					}
				}
			})
		}
		this.setState({filtered: queryData})
	}

  render() {
		const { championData } = this.state;

		let renderSearch

		if (this.state.filtered !== null) {
			renderSearch = this.state.filtered.map((ea, idx) => (
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
		}
		
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

    return (
      <div className="mx-auto col-md-10">
				<SearchBar search={this.searchData.bind(this)} />
				<Row className="mx-auto champ-box">
					{(this.state.filtered) ? renderSearch : renderChampCards }
				</Row>
      </div>
    );
  }
}

export default ChampionList;
