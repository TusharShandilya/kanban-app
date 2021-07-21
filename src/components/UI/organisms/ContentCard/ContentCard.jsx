import React, { useState, useMemo } from "react";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";

import { Card } from "../../atoms";

import styles from "./contentCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const ContentCard = ({ card, ...rest }) => {
  const { id, content } = card;
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  // const contentCardStyles = useMemo(
  //   () =>
  //     classNames(styles.card, {
  //       [styles.isDraggedOver]: isDraggedOver,
  //     }),
  //   [isDraggedOver]
  // );
  const contentCardStyles = `${styles.card} ${
    isDraggedOver ? styles.isDraggedOver : ""
  }`;

  const handleOnDragEnter = (event) => {
    event.preventDefault();
    console.log("enter");
    toggleDragClass(true);

    // Delete the card from the list and add it to it's new position
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    console.log("leave");
    toggleDragClass(false);
  };

  const toggleDragClass = (val) => {
    console.table({ toggled: val });
    setIsDraggedOver(val);
  };

  return (
    <Card
      onDragEnter={handleOnDragEnter}
      // onDragLeave={handleDragLeave}
      id={id}
      {...rest}
      className={contentCardStyles}
    >
      {/* TODO: add an overlay 200% the size */}
      <div className={styles.content}>{content}</div>
      <div className={styles.menu}>
        <FontAwesomeIcon icon={faPenSquare} />
      </div>
    </Card>
  );
};

export default ContentCard;
