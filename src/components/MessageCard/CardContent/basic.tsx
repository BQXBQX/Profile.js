import styles from "./index.module.scss";

const Basic = () => {
  return (
    <>
      <div className={styles.main}>
        <h1>Name:</h1>
        <h2>
          Xiaoming Wang
          <div></div>
        </h2>
        <h1>genders:</h1>
        <h2>
          Man
          <div></div>
        </h2>
        <h1>Date of Birth:</h1>
        <h2>
          1998-12-15
          <div></div>
        </h2>
      </div>
    </>
  );
};

export default Basic;
