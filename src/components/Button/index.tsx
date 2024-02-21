import styles from "./index.module.scss";
const Button = () => {
  return (
    <>
      <div className={styles["button-container"]}>
        <button>next page</button>
      </div>
    </>
  );
};

export default Button;
