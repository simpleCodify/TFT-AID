import React, { Component } from "react";
import data from "../data/tierlist.json";

class TierList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tierlist: data,
    };
	}
	
	render() {
		return (
			<div className="text-center">
				<h1>Tier List Page</h1>
			</div>
		)
	}
}

export default TierList;
