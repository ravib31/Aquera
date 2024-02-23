import React, { useState, useEffect } from "react";
import ResidentDetails from "./ResidentDetails";
import { fetchPlanets } from "../api/api";
import "./planetStyle/PlanetsDirectory.css";

function PlanetsDirectory() {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    fetchPlanets(`https://swapi.dev/api/planets/?page=${currentPage}`)
      .then((data) => {
        if (data) {
          setPlanets(data.results);
          setPrevPage(data.previous);
          setNextPage(data.next);
        }
      })
      .catch((error) => console.error("Error fetching planets:", error));
  }, [currentPage]);

  const handlePrevPage = () => {
    if (prevPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (nextPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <svg>
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            Star Wars Planets
          </text>
        </svg>
      </div>
      <div id="planets-container">
        {planets.map((planet) => (
          <div key={planet.name} className="planet-card">
            <h2>{planet.name}</h2>
            <p>
              <strong>Climate:</strong> {planet.climate}
            </p>
            <p>
              <strong>Population:</strong> {planet.population}
            </p>
            <p>
              <strong>Terrain:</strong> {planet.terrain}
            </p>
            <div className="planet-residents" id={`residents-${planet.name}`}>
              {planet.residents.map((residentURL, index) => (
                <ResidentDetails key={index} residentURL={residentURL} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button id="prevButton" onClick={handlePrevPage} disabled={!prevPage}>
          Previous
        </button>
        <span id="currentPage">{currentPage}</span>
        <button id="nextButton" onClick={handleNextPage} disabled={!nextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default PlanetsDirectory;
