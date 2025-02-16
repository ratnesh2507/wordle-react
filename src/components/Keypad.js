import { useEffect, useState } from "react";

function Keypad({ usedKeys, onKeyPress }) {
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

  if (!letters || !Array.isArray(letters)) {
    return <div>Loading keypad...</div>;
  }

  const firstRow = letters.slice(0, 10);
  const secondRow = letters.slice(10, 19);
  const thirdRow = letters.slice(19);

  return (
    <div className="keypad">
      <div className="keypad-row">
        {firstRow.map((l) => (
          <button
            key={l.key}
            className={usedKeys[l.key] || ""}
            onClick={() => onKeyPress(l.key)}
          >
            {l.key}
          </button>
        ))}
      </div>
      <div className="keypad-row">
        {secondRow.map((l) => (
          <button
            key={l.key}
            className={usedKeys[l.key] || ""}
            onClick={() => onKeyPress(l.key)}
          >
            {l.key}
          </button>
        ))}
      </div>
      <div className="keypad-row">
        {thirdRow.map((l) => (
          <button
            key={l.key}
            className={`${
              l.key === "Enter" || l.key === "Backspace" ? "special-key" : ""
            } ${usedKeys[l.key] || ""}`}
            onClick={() => onKeyPress(l.key)}
          >
            {l.key === "Backspace" ? "⌫" : l.key === "Enter" ? "⏎" : l.key}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Keypad;
