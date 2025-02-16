import { useEffect, useState } from "react";

function Keypad() {
  const [letters, setLetters] = useState(null);

  useEffect(function () {
    async function getLetters() {
      try {
        const res = await fetch("http://localhost:8080/letters");
        const data = await res.json();
        setLetters(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getLetters();
  }, []);
  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          return <div key={l.key}>{l.key}</div>;
        })}
    </div>
  );
}

export default Keypad;
