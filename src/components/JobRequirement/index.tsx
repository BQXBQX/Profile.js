import styles from "./index.module.scss";
import data from "../../profileconfig.json";

const Want = () => {
  return (
    <>
      <div className={styles["requirement-container"]} id="requirement">
        <div className={styles["requirement-content"]}>
          <h1>
            Job Requirement: <br></br>
            <h2>{data.jobRequirement}</h2>
          </h1>
          <h1>Job Ideal:</h1>
          {data.jobIdeal.map((item, index) => {
            return <h2 key={index}>{item}</h2>;
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
