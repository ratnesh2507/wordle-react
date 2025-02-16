import { useEffect, useState } from "react";

function Keypad({ usedKeys }) {
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
          const color = usedKeys[l.key];
          return (
            <div key={l.key} className={color}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
}

export default Keypad;
