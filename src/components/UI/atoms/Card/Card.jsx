import { forwardRef } from 'react'
import styles from './card.module.scss'

const Card = ({ className = '', children, ...rest }) => {
  return (
    <div className={`${styles.card} ${className}`} {...rest}>
      {children}
    </div>
  )
}

const Image = ({ src, alt, ...rest }) => {
  return (
    <div className={styles.image} {...rest}>
      <img src={src} alt={alt} />
    </div>
  )
}

const CardWithRef = forwardRef(({ className = '', children, ...rest }, ref) => {
  return (
    <div ref={ref} className={`${styles.card} ${className}`} {...rest}>
      {children}
    </div>
  )
})

Card.Image = Image
Card.WithRef = CardWithRef

export default Card
