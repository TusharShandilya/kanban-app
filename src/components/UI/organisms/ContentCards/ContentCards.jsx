import { useSelector } from 'react-redux'

import ContentCard from '../ContentCard/ContentCard'
import styles from './contentCards.module.scss'

const ContentCards = ({ cards }) => {
  const { entities } = useSelector((state) => state.cards)
  return (
    <div className={styles.cards}>
      {cards.map((card) => {
        const info = entities[card]
        return <ContentCard key={info.id} card={info} />
      })}
    </div>
  )
}

export default ContentCards
