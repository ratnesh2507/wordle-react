import { useState } from "react";

export default function useWordle(solution) {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); //array
  const [history, setHistory] = useState([]); //string
  const [isCorrect, setIsCorrect] = useState(false);

  // Change the guessed word into an array of letter objects
  // ex: [{ key: 'a'}, color: 'yellow' }]
  function formatGuess() {}

  /**
   * Add every new guess to the guesses state
   * update the isCorrect state if the guess is correct
   * add one turn to the state
   **/
  function addNewGuess() {}

  /**
   * Handle keyup event and track current guess
   * if user presses enter, add new guess
   */
  function handleKeyPress({ key }) {
    if (key === "Enter") {
      // only add guess is guesses made < 5
      if (turn > 5) {
        console.log("All guesses have been used");
        return;
      }
      // don't allow duplicate words
      if (history.contains(currentGuess)) {
        console.log("You already tried this word");
        return;
      }
      // check is word.length = 5
      if (currentGuess.length !== 5) {
        console.log("Word must be 5 characters long");
        return;
      }
      formatGuess();
    }
    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    }
  }

  return { turn, currentGuess, guesses, isCorrect, handleKeyPress };
}
