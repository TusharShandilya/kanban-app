/**
 * NOTES:
 * TODO: if card is being added to the same list
 * on darg over add a class to add empty space
 */

import styles from "./listCard.module.scss";

import { Card, Heading } from "../../atoms";
import ContentCard from "../ContentCard/ContentCard";
import { useState } from "react";

const dragUtils = {};

const ListCard = ({ title, cards }) => {
  const [cardsLocal, setCardsLocal] = useState(cards);

  const handleOnDragStart = (cardInfo) => (event) => {
    event.dataTransfer.setData("text", JSON.stringify(cardInfo));
    console.log(event);
  };

  const handleOnDrop = (event) => {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");

    // DO this using redux:
    // setCardsLocal((p) => [...p, JSON.parse(data)]);
  };

  const handleCardDragEnd = (position, id) => (event) => {
    event.preventDefault();
    console.log(position, id);
    // Delete the card from the list and add it to it's new position
  };

  return (
    <Card
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={handleOnDrop}
      className={styles.card}
    >
      <div className={styles.actions}>
        <Heading isBold size="6">
          {title}
        </Heading>
        <div className="menu">Menu</div>
      </div>
      {cardsLocal.map((card, index) => (
        <ContentCard
          onDragEnd={handleCardDragEnd(index, card.id)}
          onDragStart={handleOnDragStart(card)}
          draggable
          key={card.id}
          card={card}
        />
      ))}
    </Card>
  );
};

export default ListCard;
