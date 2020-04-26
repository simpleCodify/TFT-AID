import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Components Imports
import NaviBar from "./components/NaviBar";
import Home from "./components/Home";
import ChampionList from "./components/ChampionList";
import TeamBuilder from "./components/TeamBuilder";
import TierList from "./components/TierList";


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: "Tester"
    }
  }

  render() {
    return(
      <>
        <NaviBar />

        <Switch>

          <Route exact path="/" children={ <Home /> } />
          <Route path="/champions" children={ <ChampionList />} />
          <Route path="/teambuilder" children={ <TeamBuilder />} />
          <Route path="/tierlist" children={ <TierList />} />
          
        </Switch>
      </>
    )
  }
}

export default App;
