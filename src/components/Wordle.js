import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

function Wordle({ solution }) {
  const { currentGuess, handleKeyPress, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);

  useEffect(
    function () {
      window.addEventListener("keyup", handleKeyPress);

      if (isCorrect) {
        window.removeEventListener("keyup", handleKeyPress);
      }

      if (turn > 5) {
        window.removeEventListener("keyup", handleKeyPress);
      }

      return () => window.removeEventListener("keyup", handleKeyPress);
    },
    [handleKeyPress, turn, isCorrect]
  );

  return (
    <div>
      <div>Solution - {solution}</div>
      <div>Current guess - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
    </div>
  );
}

export default Wordle;
