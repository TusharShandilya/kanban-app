import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import { Button } from '../../atoms'

import styles from './addBoardCard.module.scss'

const AddBoardCard = ({ onClick }) => {
  return (
    <Button icon={faPlusSquare} onClick={onClick} className={styles.card}>
      Add a board
    </Button>
  )
}

export default AddBoardCard
