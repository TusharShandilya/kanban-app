import { randomRgbValue } from "../../../../utils";
import { Button, Heading } from "../../atoms";

import styles from "./boardCard.module.scss";

const BoardCard = ({ title, slug }) => {
  const boardStyles = {
    background: randomRgbValue(0.7),
  };

  return (
    <div className={styles.card} style={boardStyles}>
      <Heading size="4" className={styles.title}>
        {title}
      </Heading>
      <div className={styles.actions}>
        <Button color="danger" icon aria-label="Delete this board" />

        <Button>go to board</Button>
      </div>
    </div>
  );
};

export default BoardCard;