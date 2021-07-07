import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { randomRgbValue } from "../../../../utils";
import { Button, Heading } from "../../atoms";

import styles from "./boardCard.module.scss";

const BoardCard = ({ title, slug }) => {
  const boardStyles = {
    background: randomRgbValue(0.7, 200),
  };

  return (
    <div className={styles.card} style={boardStyles}>
      <Heading isInverted size="4" className={styles.title}>
        {title}
      </Heading>
      {/* TODO: Last Updated on*/}
      <div className={styles.actions}>
        <Button color="danger" icon={faTrash} aria-label="Delete this board" />

        <Button to={`/board/${slug}`} color="success">
          Go to board
        </Button>
      </div>
    </div>
  );
};

export default BoardCard;
