import { faHome } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../../../UI";

import styles from "./navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Button to="/" icon={faHome}>
        Home
      </Button>
    </nav>
  );
};

export default Navigation;
