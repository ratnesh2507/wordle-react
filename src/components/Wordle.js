import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

function Wordle({ solution }) {
  const { currentGuess, handleKeyPress, guesses, isCorrect, turn } =
    useWordle(solution);

  useEffect(
    function () {
      window.addEventListener("keyup", handleKeyPress);

      return () => window.removeEventListener("keyup", handleKeyPress);
    },
    [handleKeyPress]
  );

  useEffect(
    function () {
      console.log(guesses, isCorrect, turn);
    },
    [guesses, isCorrect, turn]
  );

  return (
    <div>
      <div>Solution - {solution}</div>
      <div>Current guess - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad />
    </div>
  );
}

export default Wordle;
