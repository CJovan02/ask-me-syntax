import classes from './ListaPitanja.module.css'
import Pitanje from "./Pitanje.jsx";
import data from '../../pitanjaData.json';

function ListaPitanja() {
  return (
    <ul className={classes.listaPitanja}>
      {data.vezbanja.map(vezbanje => {
        return <Pitanje key={vezbanje.imePitanja} imePitanja={vezbanje.imePitanja} svaPitanja={vezbanje.pitanja} />
      })}
    </ul>
  );
}

export default ListaPitanja;
