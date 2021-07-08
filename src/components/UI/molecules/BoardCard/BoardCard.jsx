import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { randomRgbValue } from "../../../../utils";
import { Button, Card, Heading } from "../../atoms";

import styles from "./boardCard.module.scss";

const BoardCard = ({ title, slug }) => {
  const boardStyles = {
    background: randomRgbValue(1, 200),
  };

  return (
    <Card className={styles.card} style={boardStyles}>
      <Heading size="4" className={styles.title}>
        {title}
      </Heading>
      {/* TODO: Last Updated on*/}
      <div className={styles.actions}>
        <Button color="danger" icon={faTrash} aria-label="Delete this board" />

        <Button to={`/board/${slug}`} color="success">
          Go to board
        </Button>
      </div>
    </Card>
  );
};

export default BoardCard;
