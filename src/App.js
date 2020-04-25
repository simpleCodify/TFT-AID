import React, {Component} from 'react';
import './App.css';


import TeamBuilder from "./components/TeamBuilder";


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: "Tester"
    }
  }

  render() {
    return(
        <TeamBuilder />
    )
  }
}

export default App;
