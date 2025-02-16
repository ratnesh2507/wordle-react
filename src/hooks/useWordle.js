import { useState } from "react";

export default function useWordle(solution) {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]); //array
  const [history, setHistory] = useState([]); //string
  const [isCorrect, setIsCorrect] = useState(false);

  // Change the guessed word into an array of letter objects
  // ex: [{ key: 'a'}, color: 'yellow' }]
  function formatGuess() {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: "grey" };
    });

    //finding green letters
    formattedGuess.forEach((letter, idx) => {
      if (solutionArray[idx] === letter.key) {
        formattedGuess[idx].color = "green";
        solutionArray[idx] = null;
      }
    });

    //finding yellow letters
    formattedGuess.forEach((letter, idx) => {
      if (solutionArray.includes(letter.key) && letter.color !== "green") {
        formatGuess[idx].color = "yellow";
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });
    return formattedGuess;
  }

  /**
   * Add every new guess to the guesses state
   * update the isCorrect state if the guess is correct
   * add one turn to the state
   **/
  function addNewGuess(formattedGuess) {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
    setTurn((prevTurn) => prevTurn + 1);
    setCurrentGuess("");
  }

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
      if (history.includes(currentGuess)) {
        console.log("You already tried this word");
        return;
      }
      // check is word.length = 5
      if (currentGuess.length !== 5) {
        console.log("Word must be 5 characters long");
        return;
      }
      const colorMap = formatGuess();
      addNewGuess(colorMap);
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
