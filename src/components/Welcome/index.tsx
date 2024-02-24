import { useEffect } from "react";
import MessageCard from "../MessageCard";
import WelcomeModel from "../Three/WelcomeModel";
import styles from "./index.module.scss";
import gsap from "gsap";

const Welcome = () => {
  useEffect(() => {
    const text = gsap.timeline({});
    text.to("#text", {
      opacity: 1,
      delay: 0.1,
      duration: 0.5,
      y: 0,
      ease: "Power4.inOut",
      stagger: 0.1,
    });
    text.play();

    const nameText = gsap.timeline({});
    nameText.to(".name-text", {});
  }, []);

  return (
    <>
      <div className={styles["welcome-container"]}>
        <h1 className={styles["welcome-span"]}>
          <div id="text">W</div>
          <div id="text">e</div>
          <div id="text">l</div>
          <div id="text">c</div>
          <div id="text">o</div>
          <div id="text">m</div>
          <div id="text">e</div>
          <div id="text">,</div>
          <div id="text" className={styles["space-before"]}>
            T
          </div>
          <div id="text">h</div>
          <div id="text">i</div>
          <div id="text">s</div>
          <div id="text" className={styles["space-before"]}>
            i
          </div>
          <div id="text">s</div>
          <div id="text" className={styles["space-before"]}>
            m
          </div>
          <div id="text">y</div>
          <div id="text" className={`${styles["space-before"]} name-text`}>
            P
          </div>
          <div id="text" className="name-text">
            r
          </div>
          <div id="text" className="name-text">
            o
          </div>
          <div id="text" className="name-text">
            f
          </div>
          <div id="text" className="name-text">
            i
          </div>
          <div id="text" className="name-text">
            l
          </div>
          <div id="text" className="name-text">
            e
          </div>
        </h1>
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
