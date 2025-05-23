//Filename: Intro.jsx
//Author: Kyle McColgan
//Date: 28 April 2025
//Description: Contains the React component for the facts Intro section.

import React from 'react';
import './Intro.css';

function Intro()
{
    return (
        <section className="intro" aria-label="Introduction">
            <h2>Welcome to the Heart of Saint Louis</h2>
            <div className="intro-text">
                <p>
                    Along the banks of the mighty Mississippi, Saint Louis shines with a vibrant spirit, rich history, and a warm, welcoming community.
                    From the soaring Gateway Arch to the soulful rhythms of blues music, barbecue, and neighborhoods full of character,
                    this city offers a dynamic blend of past and present. Explore these curated facts and experience the essence of the Gateway to the West!
                </p>
            </div>
        </section>
  );
}

export default Intro;
