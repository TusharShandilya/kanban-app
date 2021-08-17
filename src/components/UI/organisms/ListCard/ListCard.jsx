import styles from './listCard.module.scss'

import { Card, Heading } from '../../atoms'

import ContentCards from '../ContentCards/ContentCards'
import CardCreateForm from '../CardCreateForm/CardCreateForm'

const ListCard = ({ info: { id, title, cards } }) => {
  return (
    <Card className={styles.card}>
      <div className={styles.actions}>
        <Heading className={styles.title} size="1">
          {title}
        </Heading>
        <div className="menu">Menu</div>
      </div>
      <CardCreateForm listId={id} />
      <ContentCards cards={cards} />
    </Card>
  )
}

export default ListCard
