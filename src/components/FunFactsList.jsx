import React from 'react';
import { facts } from "../data/facts";
import './FunFactsList.css'; // Import the CSS file

function FunFactsList()
{
    return (
  <section id="facts" className="fun-facts">
    <h2>Discover Saint Louis Facts</h2>
    <ul className="fact-list">
      {facts.map((fact, index) => (
        <li key={index} className="fact-item">
          <h3 className="fact-title">{fact.title}</h3>
          <p className="fact-description">{fact.description}</p>
          {fact.sources.length > 0 && (
            <div className="fact-sources">
              <span>Sources: </span>
              {fact.sources.map((source, sourceIndex) => (
                <a
                  key={sourceIndex}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="source-link"
                >
                  {source.name}
                </a>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  </section>
    );
}

export default FunFactsList;
