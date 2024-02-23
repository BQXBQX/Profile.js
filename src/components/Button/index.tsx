import React, { ButtonHTMLAttributes } from "react";
import styles from "./index.module.scss";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...rest
}) => {
  return (
    <>
      <button className={`${styles["button-base"]} ${className}`} {...rest} />
    </>
  );
};

export default Button;
