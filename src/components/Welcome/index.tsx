import MessageCard from "../MessageCard";
import WelcomeModel from "../Three/WelcomeModel";
import styles from "./index.module.scss";

const Welcome = () => {
  return (
    <>
      <div className={styles["welcome-container"]}>
        <h1 className={styles["welcome-span"]}>Welcome! This is my profile!</h1>
        <div className={styles["content-container"]}>
          <MessageCard></MessageCard>
          <div className={styles["canvas-container"]}>
            <WelcomeModel></WelcomeModel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
