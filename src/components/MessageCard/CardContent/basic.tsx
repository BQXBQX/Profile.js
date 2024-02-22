import styles from "./index.module.scss";
import data from "../../../profileconfig.json";

const Basic = () => {
  return (
    <>
      <div className={styles.main}>
        <h1>Name:</h1>
        <h2>
          {data.name}
          <div></div>
        </h2>
        <h1>genders:</h1>
        <h2>
          {data.gender}
          <div></div>
        </h2>
        <h1>Date of Birth:</h1>
        <h2>
          {data.birthDate}
          <div></div>
        </h2>
      </div>
    </>
  );
};

export default Basic;
