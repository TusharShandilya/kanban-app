import classNames from 'classnames'

import styles from './field.module.scss'

const Field = ({
  type = 'text',
  disabled,
  color = 'basic',
  size = 'md',
  className,
  ...rest
}) => {
  const fieldStyles = classNames(
    styles.input,
    { [styles.disabled]: disabled },
    styles[`color-${color}`],
    styles[`size-${size}`],
    className,
  )

  return <input type={type} className={fieldStyles} {...rest} />
}

export default Field
