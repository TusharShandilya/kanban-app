/**
 *
 * @param {string} size - values: sm | md | lg | fluid
 */

import styles from "./container.module.scss";

const Container = ({ children, size = "md" }) => {
  return (
    <div className={`${styles.container} ${styles[size]}`}>{children}</div>
  );
};

export default Container;
