import { useState } from 'react';
import classes from "./Pitanje.module.css";

function Pitanje({ brojPitanja, svaPitanja }) {
  const [ novoPitanje, setNovoPitanje ] = useState('<= Pritisni');

  function getPitanjeHandler(event) {
    const pitanja = svaPitanja();
    setNovoPitanje(pitanja[Math.floor((Math.random() * pitanja.length))]);
  }

  return (
    <li className={classes.container}>
      <button className={classes.dugme} onClick={getPitanjeHandler}>{brojPitanja}</button>
      <p className={classes.pitanje}>{novoPitanje}</p>
    </li>
  );
}

export default Pitanje;
