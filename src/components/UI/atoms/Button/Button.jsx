/**
 * @param {string} variant - 'filled' | 'outlined'
 * @param {string} size - ' 'sm' | 'md' | 'lg'
 * @param {string} color - 'primary' | 'secondary' | 'danger' | 'info' | 'success'
 * @param {fontAwesome icon} icon - font awesome icon value
 * @param {boolean} isLoading - is the button in a loading state
 * @param {boolean} isDisabled - is the button in a disabled state
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import classNames from "classnames";

import styles from "./button.module.scss";

const Button = ({
  children,
  variant = "filled",
  size = "md",
  color = "primary",
  className = "",
  icon,
  isLoading,
  isDisabled,
  onClick,
  to,
  ...rest
}) => {
  const buttonStyles = classNames(
    styles.button,

    styles[`color-${color}-${variant}`],
    styles[`size-${size}`],
    {
      [styles.isIconOnly]: !!icon && !children,
      [styles.loading]: isLoading,
      [styles.disabled]: isDisabled,
      [styles[variant + "-loading"]]: isLoading,
      [styles[variant + "-disabled"]]: isDisabled,
    },
    className
  );

  const handleClick = () => {
    if (!isLoading && !isDisabled && !!onClick) {
      onClick();
    }
  };

  const renderedIcon = isLoading ? (
    <FontAwesomeIcon icon={faCircleNotch} spin />
  ) : (
    <FontAwesomeIcon icon={icon} />
  );

  const content = (
    <>
      {renderedIcon}
      {children && <span className={styles.btnText}>{children}</span>}
    </>
  );

  if (to && !isLoading && !isDisabled) {
    return (
      <Link to={to} className={buttonStyles}>
        {content}
      </Link>
    );
  } else {
    return (
      <button onClick={handleClick} className={buttonStyles} {...rest}>
        {content}
      </button>
    );
  }
};

export default Button;
