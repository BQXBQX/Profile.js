import { WheelEventHandler, useEffect, useState } from "react";
import styles from "./index.module.scss";
import data from "../../profileconfig.json";
import Button from "../Button";

const ProjectsCard = () => {
  const [cardIndex, setCardIndex] = useState<number>(0);

  const cardState = (index: number) => {
    // const target = document.getElementById("card");
    // target?.style.height = window.innerHeight;
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
    const y = target?.getBoundingClientRect().y;
    const bottom = target?.getBoundingClientRect().bottom;
    let isBottom;
    if (y && bottom) {
      isBottom = bottom <= window.innerHeight + 1;
    }

    const dampingFactor = 0.0001; // 调整这个值来改变阻尼效果
    const deltaY = e.deltaY * dampingFactor;

    if (deltaY > 0 && cardIndex !== data.projectExperience.length && isBottom) {
      setCardIndex(cardIndex + 1);
    } else if (deltaY < 0 && cardIndex !== 0) {
      setCardIndex(cardIndex - 1);
    } else if (cardIndex === data.projectExperience.length) {
      const target = document.getElementById("last");
      target?.classList.add(styles.next);
      setTimeout(() => {
        const targetWant = document.getElementById("requirement");
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
        {data.projectExperience.map((item, index) => {
          return (
            <div
              className={`${styles["projects-card-item"]} ${cardState(index)}`}
              onClick={() => cardHandleClick(index)}
              key={index}
            >
              <h1>{item.projectName}</h1>
              <h2>About Skills:{item.aboutSkill}</h2>
              <h2>Description:{item.description}</h2>
              <Button
                onClick={() => window.location.replace(item.projectGitHubUrl)}
              >
                GO!
              </Button>
            </div>
          );
        })}
        <div
          className={`${styles["projects-card-item"]} ${cardState(
            data.projectExperience.length
          )}`}
          onClick={() => cardHandleClick(data.projectExperience.length)}
          id="last"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={data.projectExperience.length}
        >
          <h1 style={{ fontSize: "50px" }}>Keep sliding !</h1>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
