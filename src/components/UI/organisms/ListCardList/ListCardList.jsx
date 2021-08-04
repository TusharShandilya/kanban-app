import { useSelector } from 'react-redux'

import ListCard from '../ListCard/ListCard'

import styles from './listCardList.module.scss'

const ListCardList = ({ lists }) => {
  const { entities, loading } = useSelector((state) => state.lists)

  if (loading) {
    return <>Loading...</>
  }

  return (
    <div className={styles.list}>
      <div className={styles.row}>
        {lists.map((list) => {
          const info = entities[list]
          return <ListCard key={info.id} info={info} />
        })}
      </div>
    </div>
  )
}

export default ListCardList
