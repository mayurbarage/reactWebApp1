import React, { useState } from 'react';

function WordGame() {
  const [word, setWord] = useState('HELLO');
  const [hiddenIndices, setHiddenIndices] = useState([]);

  const generateMissingLetters = () => {
    const indices = [];
    const numToHide = Math.floor(word.length / 2); // Hide about half the letters
    while (indices.length < numToHide) {
      const randomIndex = Math.floor(Math.random() * word.length);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    setHiddenIndices(indices);
  };

  const displayWord = word.split('').map((letter, index) => 
    hiddenIndices.includes(index) ? '_' : letter
  ).join(' ');

  return (
    <div>
      <h1>Word Game</h1>
      <input 
        value={word} 
        onChange={(e) => setWord(e.target.value.toUpperCase())} 
        placeholder="Enter a word" 
      />
      <button onClick={generateMissingLetters}>Generate Missing Letters</button>
      <p>{displayWord}</p>
    </div>
  );
}

export default WordGame;