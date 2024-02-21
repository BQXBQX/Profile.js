import styles from "./index.module.scss";
const TrickButton = () => {
  return (
    <>
      <div className={styles["button-container"]}>
        <button disabled={true}>next page</button>
      </div>
    </>
  );
};

export default TrickButton;
