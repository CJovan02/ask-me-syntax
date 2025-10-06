import { useState } from "react";
import { RiSpeakFill } from "react-icons/ri";
import { FiRefreshCcw } from "react-icons/fi";
import classes from "./Pitanje.module.css";

function Pitanje({ svaPitanja, imePitanja }) {
  const [novoPitanje, setNovoPitanje] = useState("Press the button");
  const [refresh, setRefresh] = useState(false);
  const [pitanjaArray, setPitanjaArray] = useState([...svaPitanja]);

  function getPitanjeHandler(event) {
    if (refresh) setRefresh(false);
    if (pitanjaArray.length == 0) {
      setRefresh(true);
      return;
    }

    const index = Math.floor(Math.random() * pitanjaArray.length);
    const newArray = [...pitanjaArray];
    setNovoPitanje(pitanjaArray[index]);
    newArray.splice(index, 1);
    setPitanjaArray(newArray);
  }

  function refreshHandler(event) {
    setRefresh(false);
    setPitanjaArray([...svaPitanja]);
    setNovoPitanje("Questions refreshed!");
  }

  return (
    <>
      <p className={classes.imePitanja}>{imePitanja}</p>
      <li className={classes.container}>
        {!refresh ? (
          <button className={classes.dugme} onClick={getPitanjeHandler}>
            <RiSpeakFill size={20} />
            Ask Me
          </button>
        ) : (
          <button className={classes.refresh} onClick={refreshHandler}>
            <FiRefreshCcw size={18} />
            Refresh
          </button>
        )}
        <p className={classes.pitanje}>
          {!refresh ? novoPitanje : "All questions asked, please refresh them"}
        </p>
      </li>
    </>
  );
}

export default Pitanje;
