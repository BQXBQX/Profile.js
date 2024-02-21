import TrickButton from "../TrickButton";
import styles from "./index.module.scss";

const Want = () => {
  return (
    <>
      <div className={styles["requirement-container"]} id="requirement">
        <div className={styles["requirement-content"]}>
          <h1>hello</h1>
          <h2>sjiodklasjdjkl djiosadjiksa jidslakjd jdisalkjd djisaljd disa</h2>
          <div className={styles["item-1"]}></div>
          <div className={styles["item-2"]}> </div>
          <div className={styles["item-3"]}></div>
        </div>
        <TrickButton></TrickButton>
      </div>
    </>
  );
};

export default Want;
