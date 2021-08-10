import { faTimes } from '@fortawesome/free-solid-svg-icons'
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
      {!isTransparent && (
        <Button
          icon={faTimes}
          color="basic"
          size="sm"
          onClick={toggleOverlay}
          className={styles.closeIcon}
          aria-label="close modal"
        />
      )}
    </div>
  )
}

export default Overlay
