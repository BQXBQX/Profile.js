import styles from "./index.module.scss";
import data from "../../../profileconfig.json";
const PracticeBack = () => {
  return (
    <>
      <div className={styles["practice-back-container"]}>
        <h1>Internship</h1>
        {data.internship.map((item, index) => {
          return (
            <div key={index}>
              <h2>Companies: {item.companies}</h2>
              <h2>Office: {item.office}</h2>
              <h2>
                Duration of Internship Time: {item.durationOfInternshipTime}
              </h2>
              <h2>Job Description:{item.jobDescription}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PracticeBack;
