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
  function handleKeyPress() {}

  return { turn, currentGuess, guesses, isCorrect, handleKeyPress };
}
