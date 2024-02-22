import ProjectsCard from "../ProjectsCard";
import AbilityBack from "./Content/AbilityBack";
import EducationBack from "./Content/EducationBack";
import PracticeBack from "./Content/PracticeBack";
import styles from "./index.module.scss";
import Want from "../JobRequirement";
const MoreInformation = () => {
  return (
    <>
      <div className={styles["more-information-container"]}>
        <div className={styles["more-information-content"]}>
          <div>
            <EducationBack></EducationBack>
            <PracticeBack></PracticeBack>
            <AbilityBack></AbilityBack>
            <ProjectsCard></ProjectsCard>
            <Want></Want>
            <svg
              viewBox="0 0 1440 4096"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className={styles.backers}>
                <path
                  d="M-3317 96H387c276.142 0 500 223.858 500 500v1064.51c0 99.41-80.589 180-180 180H434.99c-99.412 0-180.001 80.58-180.001 180V4248"
                  stroke="red"
                  strokeWidth="40"
                  strokeLinecap="round"
                />
                <path
                  d="M4379 804H1387c-276.14 0-499.997 223.86-499.997 500v356.51c0 99.41-80.589 180-180 180H434.991c-99.411 0-180 80.59-180 180V4248"
                  stroke="red"
                  strokeWidth="40"
                  strokeLinecap="round"
                />
                <path
                  d="M4423 96H1387.02c-276.14 0-500.001 223.858-500.001 500.001V1660.51c0 99.41-80.589 180-180 180H434.995c-99.411 0-180 80.59-180 180l.001 2227.49"
                  stroke="red"
                  strokeWidth="40"
                  strokeLinecap="round"
                />
              </g>
              <g className={styles.fillers}>
                <path
                  d="M-3317 96H387c276.142 0 500 223.858 500 500v1064.51c0 99.41-80.589 180-180 180H434.99c-99.412 0-180.001 80.58-180.001 180V4248"
                  stroke="red"
                  strokeWidth="40"
                  strokeLinecap="round"
                />
                <path
                  d="M4379 804H1387c-276.14 0-499.997 223.86-499.997 500v356.51c0 99.41-80.589 180-180 180H434.991c-99.411 0-180 80.59-180 180V4248"
                  stroke="red"
                  strokeWidth="40"
                  strokeLinecap="round"
                />
                <path
                  d="M4423 96H1387.02c-276.14 0-500.001 223.858-500.001 500.001V1660.51c0 99.41-80.589 180-180 180H434.995c-99.411 0-180 80.59-180 180l.001 2227.49"
                  stroke="red"
                  strokeWidth="40"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreInformation;
