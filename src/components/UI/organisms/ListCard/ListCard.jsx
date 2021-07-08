import styles from "./listCard.module.scss";

import { Card, Heading } from "../../atoms";

const ListCard = ({ title, cards }) => {
  return (
    <Card className={styles.card}>
      <Heading size="4">{title}</Heading>
      {cards.map((card) => (
        <Heading size="6">{card.content}</Heading>
      ))}
    </Card>
  );
};

export default ListCard;
