import React, { useState } from 'react';
import './App.css';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";

function App() {

  const [isClickedState, setIsClickedState] = useState({
    isClicked: false,
    images: images
  });

  const clickImage = id => {
    const clickedImage = isClickedState.images.filter(image => image.id === id)
    console.log(clickedImage)
    setIsClickedState({ ...isClickedState, isClicked: true });
  }


  return (

    <Wrapper>
      <Title>Kuzco's Klicky Game</Title>


      {images.map(image => (
        <ImageCard
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
