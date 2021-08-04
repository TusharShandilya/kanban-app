import { BoardCard } from '../../molecules'
import styles from './boardCardList.module.scss'

const BoardCardList = ({ boards }) => {
  return (
    <section className={styles.list}>
      {/* TODO: Create new board button */}

      {boards.map((board) => (
        <BoardCard key={board.id} title={board.title} id={board.id} />
      ))}
    </section>
  )
}

export default BoardCardList
