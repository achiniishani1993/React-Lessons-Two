import React, { useState } from "react";

const Nationality = () => {
  const [national, setNational] = useState(null);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const fetchdata = async () => {
    try {
      const response = await fetch(
        "https://api.nationalize.io?name=nathaniel"
      );
      const data = await response.json();
      setNational(data);
      setResult("");
      setGuess("");
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleGuess = () => {
    if (!national || national.country.length === 0) return;

    const correct = national.country[0].country_id;

    if (guess.toUpperCase() === correct) {
      setResult("Correct!");
      setScore(score + 1);
    } else {
      setResult(`Wrong! Correct answer: ${correct}`);
    }

     setShowResult(true);
  };

  return (
    <div>
      <button onClick={fetchdata}>Generate Name</button>

      {!national ? (
        <p>Click button to start game</p>
      ) : (
        <>
          <p>Name: {national.name}</p>

          <h3>Guess the top country Examples: US, NE, GH, NG, ID:</h3>

          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />

          <button onClick={handleGuess}>Guess</button>

          <p>{result}</p>
          <p>Score: {score}</p>

          {showResult && (<ul>
            {national.country.map((c, index) => (
              <li key={index}>
                {c.country_id} — {(c.probability * 100).toFixed(2)}%
              </li>
            ))}
          </ul>)}
        </>
      )}
    </div>
  );
};

export default Nationality;