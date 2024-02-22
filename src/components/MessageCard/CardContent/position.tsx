import styles from "./index.module.scss";
import data from "../../../profileconfig.json";

const Position = () => {
  return (
    <>
      <div className={styles.main}>
        <h1>Home Address:</h1>
        <h2>
          {data.homeAddress} <div></div>
        </h2>
      </div>
    </>
  );
};

export default Position;
