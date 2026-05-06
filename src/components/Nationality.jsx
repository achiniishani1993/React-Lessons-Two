import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nationality = () => {
  const navigate = useNavigate();


  const [national, setNational] = useState(null);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(10);
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
      setShowResult(true);
    } else {
      setResult(`Wrong Answer...! Try again`);
      setScore((prev)=> prev -1 );
    }

  };

  const handleLogout =()=>{
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  }

  return (
   <div className="d-flex flex-column justify-content-center align-items-center p-5">
  <button className="btn btn-primary" onClick={fetchdata}>
    Get Name
  </button>

  {!national ? (
    <p className="mt-3">Click button to start game</p>
  ) : (
    <>
      <p className="mt-3">Name: {national.name}</p>

      <h3 className="mt-3">
        Guess the top country Examples: US, NE, GH, NG, ID:
      </h3>

      <input
        className="form-control w-50 mt-2"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />

      <button className="btn btn-warning mt-3" onClick={handleGuess}>
        Guess
      </button>

      <p className="mt-2 text-danger">{result}</p>
      <p>Score: {score}</p>

      {showResult && (
        <ul className="mt-3">
          {national.country.map((c, index) => (
            <li key={index}>
              {c.country_id} — {(c.probability * 100).toFixed(2)}%
            </li>
          ))}
        </ul>
      )}

       <button className="btn btn-danger mt-3" onClick={handleLogout}>
        Logout
      </button>
    </>
  )}
</div>
  );
};

export default Nationality;