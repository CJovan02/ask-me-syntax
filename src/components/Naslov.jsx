import classes from "./Naslov.module.css";
import { BsFillPencilFill } from "react-icons/bs";
import { FiRefreshCcw } from "react-icons/fi";

function Naslov({refresh}) {
  return (
    <header>
      <h1 className={classes.naslov}>
        <BsFillPencilFill />
        Exercises for syntax
      </h1>

      <button className={classes.dugme} onClick={refresh} type="button">
        <FiRefreshCcw size={16} />
        Refresh Questions
      </button>
    </header>
  );
}

export default Naslov;
