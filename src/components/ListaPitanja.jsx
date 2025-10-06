import classes from "./ListaPitanja.module.css";
import Pitanje from "./Pitanje.jsx";
import data from "../data/pitanjaData.json";
import { useState } from "react";

function ListaPitanja() {
  const [showCount, setShowCount] = useState(false);

  function toggleShowCount() {
    setShowCount((prev) => !prev);
  }
  return (
    <>
      <ul className={classes.listaPitanja}>
        {data.vezbanja.map((vezbanje) => {
          return (
            <Pitanje
              key={vezbanje.imePitanja}
              imePitanja={vezbanje.imePitanja}
              svaPitanja={vezbanje.pitanja}
              showCount={showCount} // prosleđujemo prop
            />
          );
        })}
        <div className={classes.toggleContainer}>
          <label>
            <input
              type="checkbox"
              checked={showCount}
              onChange={toggleShowCount}
            />
            Show questions count
          </label>
        </div>
      </ul>
    </>
  );
}

export default ListaPitanja;
