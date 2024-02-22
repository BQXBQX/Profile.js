import styles from "./index.module.scss";
import data from "../../../profileconfig.json";
const EducationBack = () => {
  return (
    <>
      <div className={styles["education-back-container"]}>
        <h1>Education Background</h1>
        <h2>Education Attainment: {data.educationAttainment}</h2>
        <h2>main field of study (at university): {data.mainFieldStudy}</h2>
        <h2>Graduation Time: {data.graduationTime}</h2>
      </div>
    </>
  );
};

export default EducationBack;
