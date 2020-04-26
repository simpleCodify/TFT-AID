import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Components Imports
import ChampionList from "./components/ChampionList";
import NaviBar from "./components/NaviBar";
import Home from "./components/Home";


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

        </Switch>
      </>
    )
  }
}

export default App;
