import React from 'react';

import classes from './About.module.css';

const About = () => {
  return (
    <div className={classes.about}>
        <div className={classes["about-message"]}>
            <div className={classes.message}>
            <h3>Created by Pedro Henestroza</h3>
            <p>I hope you have enjoyed this website! 
            Did you know that Mandalorians have been a big part of Star Wars Canon for a long time?
            The Mandalorians were a clan-based cultural group that was composed of members from multiple species all bound by a common creed, language and code, and played a particularly important role in galactic history as legendary warriors with a fearsome reputation as conquerors as well as mercenaries and bounty hunters.
            Throughout their history, several types of Mandalorian warriors came into existance, such as Mandalorian crusaders, rally masters, and Mandalorian Neo-Crusaders, all of who waged war on the Galactic Republic and the Jedi Order, conflicts that according to legends, involved a Mand'alor who went by the name of Mandalore the Great.

In spite of this, relations between the Mandalorians and the Jedi were not always hostile, as Tarre Vizsla, a human Mandalorian, was inducted into the Jedi Order as a child, creating a lightsaber known as the Darksaber around the year 1050 BBY. Tarre eventually founded House Vizsla, claiming the position of Mand'alor, with the Darksaber becoming a symbol of leadership for House Vizsla as well as the entire Mandalorian people.
             You can read more about it <a href='https://starwars.fandom.com/wiki/Mandalorian' target="_blank" rel="noopener noreferrer">here</a></p>
            </div>
        </div>
    </div>
  )
}

export default About