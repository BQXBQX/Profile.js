import styles from "./test.module.scss";
const Test = () => {
  return (
    <div className={styles.reverseRotate}>
      <div className={styles.rotate}>
        <div className={styles.content}>正负旋转相消3D动画</div>
      </div>
    </div>
  );
};

export default Test;
