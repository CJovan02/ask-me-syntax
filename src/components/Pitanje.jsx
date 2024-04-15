import { useState } from "react";
import classes from "./Pitanje.module.css";

function Pitanje({ svaPitanja, imePitanja }) {
  const [novoPitanje, setNovoPitanje] = useState("<= Pritisni");

  function getPitanjeHandler(event) {
    setNovoPitanje(svaPitanja[Math.floor(Math.random() * svaPitanja.length)]);
  }

  return (
    <>
      <p className={classes.imePitanja}>{imePitanja}</p>
      <li className={classes.container}>
        <button className={classes.dugme} onClick={getPitanjeHandler}>
          Ask Me
        </button>
        <p className={classes.pitanje}>{novoPitanje}</p>
      </li>
    </>
  );
}

export default Pitanje;
