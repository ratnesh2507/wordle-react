import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";

function Wordle({ solution }) {
  const { currentGuess, handleKeyPress, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(
    function () {
      window.addEventListener("keyup", handleKeyPress);

      if (isCorrect) {
        setTimeout(() => setShowModal(true), 2000);
        window.removeEventListener("keyup", handleKeyPress);
      }

      if (turn > 5) {
        setTimeout(() => setShowModal(true), 2000);
        window.removeEventListener("keyup", handleKeyPress);
      }

      return () => window.removeEventListener("keyup", handleKeyPress);
    },
    [handleKeyPress, turn, isCorrect]
  );

  return (
    <div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </div>
  );
}

export default Wordle;
