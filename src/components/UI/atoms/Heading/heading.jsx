import classNames from "classnames";

import styles from "./heading.module.scss";
/**
 *
 * @param {string} size values: "1" | "2" | "3" | "4" | "5" | "6"
 * @param {boolean} isInverted - makes the heading of inverted Text color
 * @param {boolean} isBold - gives the heading a bigger font weight
 *
 */
const Heading = ({
  children,
  size = "3",
  className,
  isBold,
  isInverted,
  ...rest
}) => {
  const headingStyles = classNames(
    styles.heading,
    className,
    styles[`heading-${size}`],
    { [styles.isBold]: isBold },
    { [styles.isInverted]: isInverted }
  );

  switch (size) {
    case "1":
      return (
        <h1 className={headingStyles} {...rest}>
          {children}
        </h1>
      );
    case "2":
      return (
        <h2 className={headingStyles} {...rest}>
          {children}
        </h2>
      );
    case "3":
      return (
        <h3 className={headingStyles} {...rest}>
          {children}
        </h3>
      );
    case "4":
      return (
        <h4 className={headingStyles} {...rest}>
          {children}
        </h4>
      );
    case "5":
      return (
        <h5 className={headingStyles} {...rest}>
          {children}
        </h5>
      );
    case "6":
      return (
        <h5 className={headingStyles} {...rest}>
          {children}
        </h5>
      );
    default:
      return (
        <h3 className={headingStyles} {...rest}>
          {children}
        </h3>
      );
  }
};

export default Heading;
