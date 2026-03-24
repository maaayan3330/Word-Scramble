import { useState , useRef , useEffect} from "react";
import LetterBox from "./LetterBox";
import GameOver from "./gameOver";

export default function GameBoard() {
  const targetWord = "FLOWER";
  // state for the letters the user will submit
  const [word, setWord] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [shuffledWord , setShuffledWord] = useState("");
  const [isWin , setIsWin] = useState(false);

  // fucntion to create the six components
   function createBoxes() {
    return word.map((letter, index) => {
      return (
        <LetterBox
          key={index}
          letter={letter}
          onChange={(event) => handleInput(index, event)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          inputRef={(element) => (inputRefs.current[index] = element)}
          disabled={index !== 0 && word[index - 1] === ""}
        />
      );
    });
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
    let temp = shuffleWord(targetWord);
    while ( temp === targetWord) {
      temp = shuffleWord(targetWord);
    }
    // uploud the word after the component
    setShuffledWord(temp);
    inputRefs.current[0]?.focus();
  }, []);

  // function to set input
  function handleInput(index, event) {
    const value = event.target.value;
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

  return (
    <div className="mt-12 flex justify-center" dir="ltr">
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
        <GameOver status={isWin}/>
      </div>
    </div>
  );
}
