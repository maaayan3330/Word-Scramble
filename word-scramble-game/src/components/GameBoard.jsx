import { useState , useRef , useEffect} from "react";
import LetterBox from "./LetterBox";

export default function GameBoard() {
  // state for the letters the user will submit
  const [word, setWord] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

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

  // so the cursor will be on the first letter the moment the web up
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  // function to set input
  function handleInput(index, event) {
    const newWord = [...word];
    newWord[index] = event.target.value;
    setWord(newWord);
    // to move the focus to the next input
    if (event.target.value !== "" && index < word.length - 1) {
      setTimeout(() => {
        inputRefs.current[index + 1]?.focus();
      }, 0);
    }
  }

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


  return (
    <div
      dir="ltr"
      className="flex justify-center items-center gap-4 mt-10"
    >
      {createBoxes()}
    </div>
  );
}
