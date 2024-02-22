import styles from "./index.module.scss";
import data from "../../../profileconfig.json";
const AbilityBack = () => {
  return (
    <>
      <div className={styles["ability-back-container"]}>
        <h1>Skills </h1>
        {data.skills.map((item, index) => {
          return <h2 key={index}>{item}</h2>;
        })}
      </div>
    </>
  );
};

export default AbilityBack;
