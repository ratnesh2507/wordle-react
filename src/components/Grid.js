import Row from "./Row";

function Grid({ currentGuess, guesses, turn }) {
  return (
    <div>
      {guesses.map((guess, idx) => {
        if (turn === idx) {
          return <Row key={idx} currentGuess={currentGuess} />;
        }
        return <Row key={idx} guess={guess} />;
      })}
    </div>
  );
}

export default Grid;
