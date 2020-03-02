import React, { Component } from 'react';
import './App.css';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  state = {
    userScore: 0,
    highScore: 0,
    message: "You already guessed this character!",
    isClicked: false,
    images: images

  };

  // const userScore = 0;
  // const highScore = 0;

  clickImage = id => {
    // const clickedImage = this.state.images.filter(image => image.id === id)
    // console.log(clickedImage[0])

    this.setState({
      images: this.state.images.map(image => {

        if (image.id === id) {
          // if (image.isClicked === false) {

          //   image.isClicked = true


          // }
          // else {

          // }

        }
      })
    })
    console.log(this.state)


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
        <Title>Kuzco's Klicky Game</Title>


        {
          images.map(image => (
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
