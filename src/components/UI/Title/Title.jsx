import styles from "./title.module.scss";

const Title = ({ children, className }) => {
  return <h1 className={`${styles.title} ${className ? className : ""} `}>{children}</h1>;
};

export default Title;
