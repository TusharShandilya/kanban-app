/**
 * @param {string} variant - 'filled' | 'outlined'
 * @param {string} size - ' 'sm' | 'md' | 'lg'
 * @param {string} color - 'primary' | 'secondary' | 'danger' | 'info' | 'success'
 * @param {fontAwesome icon} icon - font awesome icon value
 * @param {boolean} isLoading - is the button in a loading state
 * @param {boolean} isDisabled - is the button in a disabled state
 */

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
  ...rest
}) => {
  const buttonStyles = classNames(
    styles.button,

    styles[`color-${color}-${variant}`],
    styles[`size-${size}`],
    {
      [styles.icon]: !!icon,
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

  return (
    <button onClick={handleClick} className={buttonStyles} {...rest}>
      {children}
    </button>
  );
};

export default Button;
