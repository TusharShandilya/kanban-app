import classNames from 'classnames'

import styles from './text.module.scss'

const Text = ({
  size = 'paragraph',
  as = 'p',
  color = 'basic',
  className,
  children,
  ...rest
}) => {
  const Component = as
  const textStyles = classNames(
    styles.text,
    styles[`size-${size}`],
    styles[`color-${color}`],
    className,
  )

  return (
    <Component className={textStyles} {...rest}>
      {children}
    </Component>
  )
}

export default Text
