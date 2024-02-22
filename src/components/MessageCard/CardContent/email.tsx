import styles from "./index.module.scss";
import data from "../../../profileconfig.json";

const Email = () => {
  return (
    <>
      <div className={styles.main}>
        <h1>Personal Email:</h1>
        <h2>
          {data.personalEmail}
          <div></div>
        </h2>
        <h1>Campus Email:</h1>
        <h2>
          {data.campusEmail} <div></div>
        </h2>
        <h1>Other Email:</h1>
        <h2>
          {data.otherEmail}
          <div></div>
        </h2>
      </div>
    </>
  );
};

export default Email;
