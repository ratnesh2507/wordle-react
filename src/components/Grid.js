import Row from "./Row";

function Grid({ currentGuess, guesses, turn }) {
  return (
    <div>
      {guesses.map((guess, idx) => (
        <Row key={idx} guess={guess} />
      ))}
    </div>
  );
}

export default Grid;
