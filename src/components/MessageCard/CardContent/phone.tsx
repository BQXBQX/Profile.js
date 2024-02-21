import styles from "./index.module.scss";

const Phone = () => {
  return (
    <>
      <div className={styles.main}>
        <h1>Personal Phone:</h1>
        <h2>
          +86 13505150625
          <div></div>
        </h2>
        <h1>Campus Phone:</h1>
        <h2>
          +86 13067890870
          <div></div>
        </h2>
        <h1>Other Phone:</h1>
        <h2>
          +86 13067890870
          <div></div>
        </h2>
      </div>
    </>
  );
};

export default Phone;
