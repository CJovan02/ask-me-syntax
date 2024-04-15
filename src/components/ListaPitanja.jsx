import classes from './ListaPitanja.module.css'
import Pitanje from "./Pitanje.jsx";
import data from '../../pitanjaData.json';

function ListaPitanja() {
  return (
    <ul className={classes.listaPitanja}>
      <Pitanje imePitanja={data.vezbanja[0].imePitanja} svaPitanja={data.vezbanja[0].pitanja} />
      <Pitanje imePitanja={data.vezbanja[1].imePitanja} svaPitanja={data.vezbanja[1].pitanja} />
    </ul>
  );
}

export default ListaPitanja;
