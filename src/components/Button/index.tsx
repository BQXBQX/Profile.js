import React, { ButtonHTMLAttributes } from "react";
import styles from "./index.module.scss";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...rest
}) => {
  return (
    <>
      <div className={styles["button-container"]}>
        <button {...rest} />
      </div>
    </>
  );
};

export default Button;
