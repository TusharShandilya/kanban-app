/**
 *
 */
import classNames from 'classnames'

import styles from './flex.module.scss'

const Flex = ({
  direction = 'row',
  wrap = 'normal',
  align,
  justify,
  className,
  children,
  ...rest
}) => {
  const flexStyles = classNames(
    styles.flex,
    {
      [styles[`wrap-${wrap}`]]: wrap,
      [styles[`direction-${direction}`]]: direction,
      [styles[`align-${align}`]]: align,
      [styles[`justify-${justify}`]]: justify,
    },
    className,
  )

  return (
    <div className={flexStyles} {...rest}>
      {children}
    </div>
  )
}

export default Flex
