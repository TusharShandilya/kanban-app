import styles from "./card.module.scss";

const Card = ({ className = "", children, ...rest }) => {
  return (
    <div className={`${styles.card} ${className}`} {...rest}>
      {children}
    </div>
  );
};

const Image = ({ src, alt, ...rest }) => {
  return (
    <div className={styles.image} {...rest}>
      <img src={src} alt={alt} />
    </div>
  );
};

Card.Image = Image;

export default Card;
