import { WheelEventHandler, useEffect, useState } from "react";
import styles from "./index.module.scss";

const ProjectsCard = () => {
  const [cardIndex, setCardIndex] = useState<number>(0);

  const cardState = (index: number) => {
    switch (index - cardIndex) {
      case -2:
        return styles["preview-card-disappear"];
      case -1:
        return styles["preview-card"];
      case 0:
        return styles["now-card"];
      case 1:
        return styles["next-card"];
      case 2:
        return styles["next-card-disappear"];
      default:
        return styles["disappear"];
    }
  };

  const cardHandleClick = (index: number) => {
    switch (index - cardIndex) {
      case -1:
        return setCardIndex(cardIndex - 1);
      case 0:
        return undefined;
      case 1:
        return setCardIndex(cardIndex + 1);
      default:
        return undefined;
    }
  };

  const handleWheel: WheelEventHandler<HTMLDivElement> = (e) => {
    const target = document.getElementById("card");
    const isBottom = target?.getBoundingClientRect().y;

    const dampingFactor = 0.0001; // 调整这个值来改变阻尼效果
    const deltaY = e.deltaY * dampingFactor;

    if (deltaY > 0 && cardIndex !== 4 && isBottom && isBottom < -85) {
      setCardIndex(cardIndex + 1);
    } else if (deltaY < 0 && cardIndex !== 0) {
      setCardIndex(cardIndex - 1);
    } else if (cardIndex === 4) {
      const target = document.getElementById("4");
      target?.classList.add(styles.next);
      setTimeout(() => {
        const targetWant = document.getElementById("want");
        targetWant?.classList.add(styles.want);
      }, 200);
    }
  };

  useEffect(() => {
    if (cardIndex !== 0) {
      document.body.style.overflow = "hidden";
    }
    if (cardIndex === 0) {
      document.body.style.overflow = "auto";
    }
  }, [cardIndex]);

  return (
    <>
      <div
        className={styles["projects-card-container"]}
        onWheel={handleWheel}
        id="card"
      >
        <div
          className={`${styles["projects-card-item"]} ${cardState(0)}`}
          onClick={() => cardHandleClick(0)}
        >
          <h1>SAST Evento</h1>
          <h2>URL:Evento.sast.fun/console</h2>
          <h2>Description:</h2>
        </div>
        <div
          className={`${styles["projects-card-item"]} ${cardState(1)}`}
          onClick={() => cardHandleClick(1)}
        ></div>
        <div
          className={`${styles["projects-card-item"]} ${cardState(2)}`}
          onClick={() => cardHandleClick(2)}
        ></div>
        <div
          className={`${styles["projects-card-item"]} ${cardState(3)}`}
          onClick={() => cardHandleClick(3)}
        ></div>
        <div
          className={`${styles["projects-card-item"]} ${cardState(4)}`}
          onClick={() => cardHandleClick(4)}
          id="4"
        ></div>
      </div>
    </>
  );
};

export default ProjectsCard;
