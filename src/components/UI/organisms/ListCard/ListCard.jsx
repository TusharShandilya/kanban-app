import styles from './listCard.module.scss'

import { Card, Heading } from '../../atoms'

import ContentCards from '../ContentCards/ContentCards'

const ListCard = ({ info: { title, cards } }) => {
  return (
    <Card className={styles.card}>
      <div className={styles.actions}>
        <Heading className={styles.title} size="1">
          {title}
        </Heading>
        <div className="menu">Menu</div>
      </div>
      <ContentCards cards={cards} />
    </Card>
  )
}

export default ListCard
