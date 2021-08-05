import classNames from 'classnames'

import styles from './field.module.scss'

const Field = ({
  type = 'text',
  disabled,
  color = 'basic',
  size = 'md',
  as,
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

  const Component = as || 'input'

  return <Component type={type} className={fieldStyles} {...rest} />
}

export default Field
