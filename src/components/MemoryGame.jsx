import React, { useState, useEffect } from 'react';
import './memory.css';

// Assuming the images array is defined as shown in your snippet
const images = [
  { id: 1, src: './one.jpg', clicked: false },
  { id: 2, src: './two.jpg', clicked: false },
  { id: 3, src: './three.jpg', clicked: false },
  { id: 4, src: './four.jpg', clicked: false },
  { id: 5, src: './five.jpg', clicked: false },
  { id: 6, src: './six.jpg', clicked: false },
  { id: 7, src: './seven.jpg', clicked: false },
  { id: 8, src: './eight.jpg', clicked: false },
  { id: 9, src: './aa.jpeg', clicked: false },
  { id: 10, src: './bb.jpeg', clicked: false },
  { id: 11, src: './cc.jpeg', clicked: false },
  { id: 12, src: './jon.jpeg', clicked: false },
  { id: 13, src: './sponge.png', clicked: false },
  { id: 14, src: './nnn.webp', clicked: false },
  { id: 15, src: './op.jpeg', clicked: false },
];

function MemoryGame() {
  const [gameImages, setGameImages] = useState(images);
  const [score, setScore] = useState(0);

  const handleImageClick = (id) => {
    const updatedImages = gameImages.map((image) => {
      if (image.id === id) {
        if (image.clicked) {
          // The image is already clicked, game over.
          alert('Game Over');
          setTimeout(() => window.location.reload(),0); // Reload the page after a short delay
          return { ...image, clicked: false };
        } else { 
          setScore(score + 1);
        }
        return { ...image, clicked: true };
      }
      return image;
    });
    setGameImages(updatedImages);
  }

  useEffect(() => {
    // This effect shuffles the images each time the score changes.
    setGameImages(shuffleArray([...gameImages]));
  }, [score]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div>
      <h2>Score: {score}</h2>
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
