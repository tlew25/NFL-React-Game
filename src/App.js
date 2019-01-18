// Import React components for UI
import React, { Component } from "react";
import Teams from "./components/Teams";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import teams from "./teams.json";
import "./App.css";

// Variables set to zero
let highscore = 0;
let score = 0;

// Using class set state to current *teams is a json file*
class App extends Component {
  state = {
    teams,
    highscore,
    score
  };
  // Counter() used to increment team cards by +1 when clicked 
  Counter = id => {
   // eslint-disable-next-line
    this.state.teams.find((t, i) => {
      // find() uses "t" to find the id of each team object card
      // If the id in the team array has a count of 0 (which is on the state component above after import) add 1
      if (t.id === id) {
        if (teams[i].count === 0) { 
          teams[i].count = teams[i].count + 1;
          this.setState({score : this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          // Sort function allows for teams object data to be shuffled similar to a for loop
          this.state.teams.sort(() => Math.random() - 0.5);
          // Returns true if there is +1 else...end Counter() and evoke endGame()
          return true;
        } else {
          // Evokes endGame() 
          this.endGame();
        }
      }
    });
  };
  // End game function with alert and logic to set new highscore if the current score surpasses
  endGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore : this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }
    // Takes the teams.json array and resets the count "for each" team object
    this.state.teams.forEach(team => {
      team.count = 0;
    });
    // Alert function with current state of score
    alert(`You Lose!\nTotal Score: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  };
  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} highscore={this.state.highscore}>NFL Matchups</Navbar>
        {/* Map() genrates the NFL team cards and uses a Counter() as a onClick function in Teams Component */}
        {this.state.teams.map(team => (
          <Teams
            Counter={this.Counter}
            id={team.id}
            key={team.id}
            name={team.name}
            image={team.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
