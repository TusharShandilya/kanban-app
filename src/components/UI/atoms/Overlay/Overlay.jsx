import styles from './overlay.module.scss'

const Overlay = ({ children, ...rest }) => {
  return (
    <div {...rest} className={styles.Overlay}>
      {children}
    </div>
  )
}

export default Overlay
