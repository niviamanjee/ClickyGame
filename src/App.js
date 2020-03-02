import React, { Component } from 'react';
import './App.css';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import images from "./images.json";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  state = {
    userScore: 0,
    highScore: 0,
    message: "You already guessed this character!",
    images: images

  };

  // const userScore = 0;
  // const highScore = 0;

  clickImage = id => {
    this.setState({
      images: this.state.images.map(image => {
        if (image.id === id) {
          if (image.clicked === false) {
            image.clicked = true
            this.state.userScore = this.state.userScore + 1
            console.log(image.clicked, this.state.userScore)
          }
          else {
            console.log(this.state.message)
            this.state.userScore = 0
          }
        }
        return image;
      })
    })

  }
  shuffle = () => {
    const images = this.state.images.sort(function (a, b) {
      return 0.5 - Math.random()
    });
    this.setState({ images });
  };

  render() {

    return (

      <Wrapper>
        <Navbar userScore={this.state.userScore} highScore={this.state.highScore}>Kuzco's Klicky Game</Navbar>


        {
          this.state.images.map(image => (
            <ImageCard
              key={image.id}
              shuffle={this.shuffle}
              clickImage={this.clickImage}
              id={image.id}
              name={image.name}
              image={image.image}
            />
          ))
        }


      </Wrapper >
    )
  };
}

export default App;
