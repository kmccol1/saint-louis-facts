//Filename: Interactive.jsx
//Author: Kyle McColgan
//Date: 28 April 2025
//Description: Contains the React component for the facts Interactive section.

import React, { useState, useCallback } from "react";
import { facts } from "../data/facts";
import './Interactive.css';

function Interactive()
{
    const [randomFact, setRandomFact] = useState(null);

    const getRandomFact = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        setRandomFact(facts[randomIndex]);
    }, []);

    return (
        <section id="interactive" className="interactive">
            <h2 className="interactive-title">Discover a Random Fact</h2>
                <button
                    className="interactive-button"
                    onClick={getRandomFact}
                    aria-label="Generate a random Saint Louis fact"
                >
                  Show Me a Fact
                </button>

            {randomFact && (
                <div className="interactive-fact-display" aria-live="polite">
                    <h3 className="fact-title">{randomFact.title}</h3>
                        <p className="fact-description">{randomFact.description}</p>
                </div>
            )}
        </section>
  );
}

export default Interactive;
