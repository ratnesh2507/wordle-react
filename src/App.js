import { useState } from "react";
import { useEffect } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [answer, setAnswer] = useState(null);

  useEffect(
    function () {
      async function getWords() {
        try {
          const res = await fetch("http://localhost:8080/solutions");
          const data = await res.json();
          // console.log(data);
          // selecting a random word from the list of words
          const randomWord = data[Math.floor(Math.random() * data.length)];
          setAnswer(randomWord.word);
          // console.log(randomWord);
        } catch (error) {
          console.log(error.message);
        }
      }
      getWords();
    },
    [setAnswer]
  );

  return (
    <div className="App">
      <h1>Wordle</h1>
      {answer && <Wordle solution={answer} />}
    </div>
  );
}

export default App;
