// Import react 
import React, { Component } from 'react';
// Import App css file
import './App.css';
// Import app navbar component 
import Navbar from "./Components/Navbar";
// Import app footer component 
import Footer from "./Components/Footer";
// Import app container component 
import Container from "./Components/Container";
// Import json file (contains list of player and img)
import players from "./Players.json";
// Import the player card/ image component
import PlayerCard from "./Components/PlayerCard";

// Define variable that keeps track of number of correct guess eithout clicking on the img twice.
let count =0;
// Define variable that will keep track of player's top score
let topScore = 0;
// Define variable that holds massages that will appear as player plays the game
let Message ="Click an image to earn points but avoid clicking on an image twice."

// Class called App that will serve as an extension of component.
class App extends Component {
  state ={
    // settign this.state.players to the players json array
    players,
    // setting this.state.count to the number of correct guesses
    count,
    // setting this.state.topScore to the player's top score
    topScore,
    // setting this.state. Message to the player message deisplayed
    Message
  }

  // run updatePlayerClicked Value when player clicks img.
  updatePlayerClickedValue = id => {
    // log thi id of img that was clicked to console.
    console.log(' ${id}, clicked ');
    // Filter this.state.players for player w/t an id equal to clicked id
     const clickedPlayer = this.state.players.filter(clickedPlayer => clickedPlayer => clickedPlayer.id === id);
     console.log(clickedPlayer);
    //  If img has not been click by player (clicked ===false)
    if (clickedPlayer[0].clicked === "false") {
      // set player's clicked property to true
      clickedPlayer[0].clicked = "true";
      console.log(clickedPlayer);
      // use the setState method to update a component's state.
      // update the count - number of correct guessed 
      this.setState({ count: this.state.count + 1 });
      // update the game message (top navebar)
      this.setState({ Message: "You're doing great! You habe not clicked that image."});
      console.log(this.state.count);
  }

  // if the player clicks an image again, then...
  else if (clickedPlayer[0].clicked === "true")
  {
    // update the game message to let the player know they have clicked that img already. Rest game.
    this.setState({ 
    Message: "KO.You already click that image. The game will reset",
    // update the count. number of correct clicks. back to 0 to reset game.
    count: 0,
    // update top score
    topScore: this.state.count + 1
    // for every player set clicked value back to false
  });
     players.forEach(player => player.clicked = "false");
    console.log(players);
  }

  // if player clicks all imgs without clicking an img more than once (this is, count = 12), the player wins.
  if (this.state.count === 11) {
    // update game message to let the player know they win. Rest game.
    this.setState({
    Message: "You have a strong hippocampus! You win!",
    // update the count. number of correct clicks. back to 0 to reset game.
    count: 0,
    // update top score
    topScore: this.state.count,
    });
     // for every player set clicked value back to false
    players.forEach(player => player.clicked = "false");
    console.log(players);
  }
  
   //Randomize 
    //Every time an image is clicked, the images rendered to the page shuffle themselves in a random order.
    //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

    for (let i = players.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [players[i], players[j]] = [players[j], players[i]];

    }

  };

  //Render the app components.
  render() {
    return [

      //Top navigation bar component.
      //We are passing 3 props into the navbar component, count, topScore, and Message.

      <Navbar
        count={this.state.count}
        topScore ={this.state.topScore}
        Message={this.state.Message}  
      />,

      //Container component that holds all the clickable player images.
      <Container>

        <div className="row">

          <div className="col-md-3 col-sm-6 col-xs-12">
            {this.state.players.slice(0,3).map(player => (

              <PlayerCard
                id={player.id}
                key={player.id}
                name={player.name}
                image={player.image}

                updatePlayerClickedValue = {this.updatePlayerClickedValue}          
              />

            ))}

          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            {this.state.players.slice(3,6).map(player => (

              <PlayerCard
                id={player.id}
                key={player.id}
                name={player.name}
                image={player.image}

                updatePlayerClickedValue = {this.updatePlayerClickedValue}                

              />

            ))}

          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">

            {this.state.players.slice(6,9).map(player => (

              <PlayerCard
                id={player.id}
                key={player.id}
                name={player.name}
                image={player.image}

                updatePlayerClickedValue = {this.updatePlayerClickedValue}                

              />

            ))}

          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            {this.state.players.slice(9,12).map(player => (

              <PlayerCard
                id={player.id}
                key={player.id}
                name={player.name}
                image={player.image}

                updatePlayerClickedValue = {this.updatePlayerClickedValue}
              />

            ))}

          </div>

        </div>

      </Container>,

      //App Footer component.
      <Footer />,

    ];

  }

}

//Export App so that index.js can use it to render the components to the page.
export default App;