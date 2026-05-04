import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Nationality = () => {
  const [national, setNational] = useState(null);
  const fetchdata = async () => {
    try {
      const response = await fetch("https://api.nationalize.io?name=nathaniel");
      const data = await response.json();
      setNational(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  //useEffect (() => {fetchdata()}, []);

  const generateName = () => {
    fetchdata();
  };

  return (
    <div>
      <button onClick={generateName}>Generate Name</button>
      {!national ? (
        <p>Click the button to load data</p>
      ) : (
        <>
          <p>Name: {national.name}</p>

          <ul>
            {national.country.map((c, index) => (
              <li key={index}>
                {c.country_id} — {(c.probability * 100).toFixed(2)}%
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Nationality;
