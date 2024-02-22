import styles from "./index.module.scss";
import data from "../../../profileconfig.json";

const Phone = () => {
  return (
    <>
      <div className={styles.main}>
        <h1>Personal Phone:</h1>
        <h2>
          {data.personalPhone}
          <div></div>
        </h2>
        <h1>Campus Phone:</h1>
        <h2>
          {data.campusPhone} <div></div>
        </h2>
        <h1>Other Phone:</h1>
        <h2>
          {data.otherPhone} <div></div>
        </h2>
      </div>
    </>
  );
};

export default Phone;
