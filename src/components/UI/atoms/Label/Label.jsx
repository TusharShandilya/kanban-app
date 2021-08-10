import classNames from 'classnames'

import styles from './label.module.scss'

const Label = ({ children, color = 'basic', className, ...rest }) => {
  const labelStyles = classNames(
    styles.text,
    styles[`color-${color}`],
    className,
  )

  return (
    <label className={labelStyles} {...rest}>
      {children}
    </label>
  )
}

export default Label
