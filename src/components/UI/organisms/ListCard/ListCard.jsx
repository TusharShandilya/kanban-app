import styles from './listCard.module.scss'

import { Card } from '../../atoms'

import ContentCards from '../ContentCards/ContentCards'
import CardCreateForm from '../CardCreateForm/CardCreateForm'
import TitleEditForm from '../TitleEditForm/TitleEditForm'

const ListCard = ({ info: { id, title, cards } }) => {
  return (
    <Card className={styles.card}>
      <div className={styles.actions}>
        <TitleEditForm title={title} headingProps={{ isTitle: true }} />

        <div className="menu">Menu</div>
      </div>
      <CardCreateForm listId={id} />
      <ContentCards cards={cards} />
    </Card>
  )
}

export default ListCard
