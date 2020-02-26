import React, { useState } from 'react';
import './App.css';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [imageState, setImageState] = useState({
    isClicked: false,
    images: images
  });

  const clickImage = id => {
    const clickedImage = imageState.images.filter(image => image.id === id)
    console.log(clickedImage)
    setImageState({ ...imageState, isClicked: true });
  }
  const shuffle = () => {
    const images = imageState.images.sort(function (a, b) {
      return 0.5 - Math.random()
    });
    console.log(images)
    setImageState({ images });
  };


  return (

    <Wrapper>
      <Title>Kuzco's Klicky Game</Title>


      {images.map(image => (
        <ImageCard
          shuffle={shuffle}
          clickImage={clickImage}
          id={image.id}
          name={image.name}
          image={image.image}
        />
      ))}


    </Wrapper>
  )
};

export default App;
