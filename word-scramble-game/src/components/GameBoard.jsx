import { useState , useRef , useEffect} from "react";
import LetterBox from "./LetterBox";
import GameOver from "./gameOver";
import { words } from "../words";

export default function GameBoard() {
  // state for the letters the user will submit
  const [word, setWord] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [shuffledWord , setShuffledWord] = useState("");
  const [isWin , setIsWin] = useState(false);
  const [targetWord, setTargetWord] = useState("");
  const [isHintUsed, setIsHintUsed] = useState(false);
  

  // fucntion to create the six components
   function createBoxes() {
    const firstEmptyIndex = word.findIndex((letter) => letter === "");
    const activeIndex = firstEmptyIndex === -1 ? word.length - 1 : firstEmptyIndex;

    return word.map((letter, index) => {
      return (
        <LetterBox
          key={index}
          letter={letter}
          onChange={(event) => handleInput(index, event)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          inputRef={(element) => (inputRefs.current[index] = element)}
          disabled={isHintUsed && index === 0 ? true : index !== activeIndex}
        />
      );
    });
  }

  // function to get a random word
  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  // function to shuffle the word for the game
  function shuffleWord(word) {
    return word
      .split("")             
      .sort(() => Math.random() - 0.5) 
      .join("");                    
  }

  // so the cursor will be on the first letter the moment the web up
  useEffect(() => {
    startNewGame();
  }, []);

  // function to set input
  function handleInput(index, event) {
    const value = event.target.value;
    if (value === "") {
      const newWord = [...word];
      newWord[index] = "";
      setWord(newWord);
      setIsWin(false);
      return;
    }

    // i take only the first letter - to avoid copy of more than one letter
    const letter = value.slice(-1);

    // chack if the leter is in english
    if (/^[a-zA-Z]$/.test(letter)) {
      const newWord = [...word];
      newWord[index] = letter.toUpperCase();
      setWord(newWord);
      // check if there is a win
      const result = checkWin(newWord);
      setIsWin(result);
      // move the focus to the next letter
      if (index < word.length - 1) {
        setTimeout(() => {
          inputRefs.current[index + 1]?.focus();
        }, 0);
      }
    }
  }

  // function to handle the key "backspace" so we can delete
  function handleKeyDown(index, event) {
    if (event.key === "Backspace" && word[index] === "" && index > 0) {
      // if there is a hint
      if (isHintUsed && index - 1 === 0) {
      return;
    }
      const newWord = [...word];
      newWord[index - 1] = "";
      setWord(newWord);

      setTimeout(() => {
        inputRefs.current[index - 1]?.focus();
      }, 0);
    }
  }

  // function to check if the player correct
  function checkWin(currentWord) {
    if(targetWord === currentWord.join("")) {
      return true;
    }
    return false;
  }

  function startNewGame() {
    const randomWord = getRandomWord();
    setTargetWord(randomWord);
    // make sure the word really shuffled
    let temp = shuffleWord(randomWord);
    while (temp === randomWord) {
      temp = shuffleWord(randomWord);
    }
    // start over
    setShuffledWord(temp);
    setWord(["", "", "", "", "", ""]);
    setIsWin(false);
    setIsHintUsed(false);
    // uploud the word after the component
    setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 0);
  }

  function hint() {
    const first_letter = targetWord[0];
    setWord([first_letter, "", "", "", "", ""]);
    setIsHintUsed(true);
    setIsWin(false);
      setTimeout(() => {
        inputRefs.current[1]?.focus();
      }, 0);
    }
  

  return (
  <div className="mt-12 flex flex-col items-center" dir="ltr">
    <div className="w-full max-w-5xl rounded-3xl bg-white/80 shadow-xl border border-slate-200 px-8 py-10">
      <h2 className="text-center text-2xl font-bold text-slate-700">
        Unscramble the word
      </h2>

      <p className="mt-2 text-center text-slate-500 text-lg">
        Arrange the letters in the correct order
      </p>

      <div className="mt-8 flex justify-center">
        <div className="rounded-2xl bg-gradient-to-r from-pink-100 via-violet-100 to-blue-100 px-8 py-4 shadow-md border border-violet-200">
          <span className="text-3xl font-extrabold tracking-[0.4em] text-slate-700">
            {shuffledWord}
          </span>
        </div>
      </div>

      <div className="mt-10 flex justify-center items-center gap-4">
        {createBoxes()}
      </div>
    </div>
    <button
      onClick={startNewGame}
      className="mt-6 px-6 py-3 rounded-2xl bg-pink-500 text-white font-semibold shadow-lg hover:bg-pink-600 transition"
    >
      Change Word
    </button>
    <button
      onClick={isHintUsed ? undefined : hint}
      className="mt-6 px-6 py-3 rounded-2xl bg-pink-500 text-white font-semibold shadow-lg hover:bg-pink-600 transition"
    >
      Get an hint
    </button>

    <GameOver status={isWin} handleClick={startNewGame} />
  </div>
);
}

