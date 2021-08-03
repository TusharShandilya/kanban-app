/**
 *
 * @param {string} size - values: sm | md | lg | fluid
 */
import classNames from 'classnames'

import styles from './container.module.scss'

const Container = ({ children, className, isFullHeight, size = 'md' }) => {
  const containerStyles = classNames(
    styles.container,
    [styles[size]],
    { [styles.isFullHeight]: isFullHeight },
    className,
  )

  return <div className={containerStyles}>{children}</div>
}

export default Container
