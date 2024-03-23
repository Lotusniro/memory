import React from 'react';
import { useState, useEffect } from 'react';
import './memory.css';


//Dummy data for the images, replace with your actual images
const images = [
  { id: 1, src: '/one.jpg', clicked: false },
  { id: 2, src: '/two.jpg', clicked: false },
  { id: 3, src: '/three.jpg', clicked: false },
  { id: 4, src: '/four.jpg', clicked: false },
  { id: 5, src: '/five.jpg', clicked: false },
  { id: 6, src: '/six.jpg', clicked: false },
  { id: 7, src: '/seven.jpg', clicked: false },
  { id: 8, src: '/eight.jpg', clicked: false },
  { id: 9, src: '/aa.jpeg', clicked: false },
  { id: 10, src: '/bb.jpeg', clicked: false },
  { id: 11, src: '/cc.jpeg', clicked: false },
  { id: 12, src: '/jon.jpeg', clicked: false },
  { id: 13, src: '/sponge.png', clicked: false },
  { id: 14, src: '/nnn.webp', clicked: false },
  { id: 15, src: '/op.jpeg', clicked: false },




  // { id: 1, src: '../src/assets/images/one.jpg', clicked: false },
  // { id: 9, src: '../src/assets/images/nine.jpg', clicked: false },
];

function MemoryGame() {
  const [gameImages, setGameImages] = useState(images);
  const [score, setScore] = useState(0);

  //if a image cliked lets add 1 to the score
  //if the image is clicked again then score -1 and alert the user clicked the image again
  //when 5th round game is over

  const handleImageClick = (id ) => {
    const updatedImages = gameImages.map((image) => {
      if (image.id === id) {
        if (image.clicked) {
          //image.cliked means the image is already clicked
          //clicked is a met
          alert('Game Over');
          setScore(0);
          return { ...image, clicked: false };
        }else{ 
          setScore(score + 1)
        }
       
        return { ...image, clicked: true };
      }
      return image;
    });
    setGameImages(updatedImages);
  }

useEffect(() => {
    setGameImages(shuffleArray(gameImages));
  }
    , [score]);

  const shuffleArray = (array) => {

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  
  return (
    <div>
 
      <h2 >Score: {score}</h2>
      <div className='mm-game'>
        {gameImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Memory game piece ${image.id}`}

            onClick={() => handleImageClick(image.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default MemoryGame;
