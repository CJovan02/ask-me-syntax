import { useState } from "react";
import { RiSpeakFill } from "react-icons/ri";
import classes from "./Pitanje.module.css";

function Pitanje({ svaPitanja, imePitanja }) {
  const [novoPitanje, setNovoPitanje] = useState("Press the button");
  let pitanjaArray = [];
  pitanjaArray = svaPitanja;

  function getPitanjeHandler(event) {
    console.log(pitanjaArray);
    const index = Math.floor(Math.random() * pitanjaArray.length);
    setNovoPitanje(pitanjaArray[index]);
    pitanjaArray.splice(index, 1);
  }

  function refreshHandler(event) {
    pitanjaArray = svaPitanja;
  }

  return (
    <>
      <p className={classes.imePitanja}>{imePitanja}</p>
      <li className={classes.container}>
        <button className={classes.dugme} onClick={getPitanjeHandler}>
          <RiSpeakFill />
          Ask Me
        </button>
        <p className={classes.pitanje}>{pitanjaArray.length != 0 ? novoPitanje : "All questions asked, please refresh them"}</p>
      </li>
    </>
  );
}

export default Pitanje;
