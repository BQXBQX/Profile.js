import styles from "./index.module.scss";
import data from "../../profileconfig.json";

const Want = () => {
  return (
    <>
      <div className={styles["requirement-container"]} id="requirement">
        <div className={styles["requirement-content"]}>
          <h2>
            Job Requirement: <br></br>
          </h2>
          <h1>{data.jobRequirement}</h1>
          <h2>Job Ideal:</h2>
          {data.jobIdeal.map((item, index) => {
            return <h3 key={index}>{item}</h3>;
          })}
          <div className={styles["item-1"]}></div>
          <div className={styles["item-2"]}> </div>
          <div className={styles["item-3"]}></div>
        </div>
      </div>
    </>
  );
};

export default Want;
