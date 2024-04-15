import classes from './ListaPitanja.module.css'
import Pitanje from "./Pitanje.jsx";
import { prvoPitanje, drugoPitanje, trecePitanje } from "./pitanja.jsx";

function ListaPitanja() {
  return (
    <ul className={classes.listaPitanja}>
      <Pitanje brojPitanja="1. Pitanje" svaPitanja={prvoPitanje} />
      <Pitanje brojPitanja="2. Pitanje" svaPitanja={drugoPitanje} />
      <Pitanje brojPitanja="3. Pitanje" svaPitanja={trecePitanje} />
    </ul>
  );
}

export default ListaPitanja;
