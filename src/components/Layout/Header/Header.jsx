import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="">Home nav here</div>
      <div className="">Logo here</div>
      <div className="">
        <span>Dark Mode toggle</span>
        <span>User menu open here</span>
      </div>
    </div>
  );
};

export default Header;
