import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Points from './components/points.js'
import Signup from './components/signup.js'

class App extends Component {
  state = {
    players: [{
      "name": "",
      "points": 0
    },
    {
      "name": "",
      "points": 0
    }]
  }

  //reversed again?
  handlePlayerNameChange = (value, index) => {
    console.log("parent", index, value)
    var contestants = this.state.players;
    //why are the parameters reversed?
    contestants[value].name = index;
    this.setState({ players: contestants });
  }

  addNewPlayer = () => {
    console.log("adding new player")
    var contestants = this.state.players;
    contestants.push({
      "name": "",
      "points": 0
    })
    this.setState({ players: contestants })
  }

  removePlayer = () => {
    console.log("removing player");
    var contestants = this.state.players;
    contestants.pop();
    this.setState({ players: contestants })
  }

  letsPlay = () => {
    console.log(this.state.players)
    return this.state.players
  }
  render() {
    return (

      <BrowserRouter>
        <div>
          <Route exact path="/" render={() =>
            <Signup
              players={this.state.players}
              handleNewPlayer={this.addNewPlayer}
              handleRemovePlayer={this.removePlayer}
              handlePlayerNameChange={this.handlePlayerNameChange}
              handleLetsPlay={this.letsPlay}
            />
          }
          />
          <Route exact path="/points" render={() =>
            <Points
            //THIS DOESNT WORK
              players={this.state.players}
            />
          } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
