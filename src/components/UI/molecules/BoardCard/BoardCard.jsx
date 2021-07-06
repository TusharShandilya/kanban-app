import { Heading } from "../../atoms";

import styles from "./boardCard.module.scss";

const BoardCard = ({ title, slug }) => {
  return (
    <div className={styles.card}>
      <Heading size="4">{title}</Heading>
      <div className={styles.actions}>
        <button>delete</button>
        <button>go to board</button>
      </div>
    </div>
  );
};

export default BoardCard;
