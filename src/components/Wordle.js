import { useEffect } from "react";
import useWordle from "../hooks/useWordle";

function Wordle({ solution }) {
  const { currentGuess, handleKeyPress } = useWordle(solution);

  useEffect(
    function () {
      window.addEventListener("keyup", handleKeyPress);

      return () => window.removeEventListener("keyup", handleKeyPress);
    },
    [handleKeyPress]
  );
  return <div>Current guess - {currentGuess}</div>;
}

export default Wordle;
