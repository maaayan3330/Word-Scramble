import { useState } from "react";
import LetterBox from "./LetterBox";

export default function GameBoard() {
  // state for the letters the user will submit
  const [word, setWord] = useState(["", "", "", "", "", ""]);

  // fucntion to create the six components
   function createBoxes() {
    return word.map((letter, index) => {
      return (
        <LetterBox
          key={index}
          letter={letter}
          onChange={(event) => handleInput(index, event)}
        />
      );
    });
  }

  // function to set input
  function handleInput(index, event) {
    const newWord = [...word];
    newWord[index] = event.target.value;
    setWord(newWord);
  }

  return (
  <div className="flex justify-center items-center gap-4 mt-10">
    {createBoxes()}
  </div>
);
}
