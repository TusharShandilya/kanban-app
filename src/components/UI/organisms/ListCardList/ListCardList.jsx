import ListCard from '../ListCard/ListCard'

import styles from './listCardList.module.scss'

const ListCardList = ({ lists }) => {
  return (
    <div className={styles.list}>
      <div className={styles.row}>
        {lists.map((list) => (
          <ListCard key={list.id} title={list.title} cards={list.cards} />
        ))}
      </div>
    </div>
  )
}

export default ListCardList
