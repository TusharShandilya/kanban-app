import styles from './listCard.module.scss'

import { Card, Heading } from '../../atoms'
import ContentCard from '../ContentCard/ContentCard'

const ListCard = ({ title, cards }) => {
  return (
    <Card className={styles.card}>
      <div className={styles.actions}>
        <Heading isBold size="6">
          {title}
        </Heading>
        <div className="menu">Menu</div>
      </div>
      <div className={styles.cards}>
        {cards.map((card) => (
          <ContentCard key={card.id} card={card} />
        ))}
      </div>
    </Card>
  )
}

export default ListCard
