import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import Button from '../Button/Button'

import styles from './overlay.module.scss'

const Overlay = ({ children, isTransparent, toggleOverlay, ...rest }) => {
  const overlayStyles = classNames(styles.overlay, {
    [styles.isTransparent]: isTransparent,
  })

  return (
    <div {...rest} className={overlayStyles}>
      {children}
      <Button
        icon={faTimes}
        color="basic"
        size="sm"
        onClick={toggleOverlay}
        className={styles.closeIcon}
      />
    </div>
  )
}

export default Overlay
