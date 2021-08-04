import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchBoardsById } from '../../../store/boardsSlice'

import { Container, Heading, ListCardList } from '../../UI'

import styles from './board.module.scss'

const BoardPage = () => {
  const { entities: boards, loading } = useSelector((state) => state.boards)
  const dispatch = useDispatch()

  const { boardId } = useParams()

  const currBoard = useMemo(() => {
    if (!loading) {
      return boards[boardId]
    }
  }, [loading, boards, boardId])

  useEffect(() => {
    dispatch(fetchBoardsById(boardId))
  }, [boardId])

  if (loading || !currBoard) {
    return <Heading>Loading...</Heading>
  }

  return (
    <Container size="fluid" isFullHeight className={styles.container}>
      <Heading className="is-text-centered">{currBoard.title}</Heading>
      <ListCardList lists={currBoard.lists} />
    </Container>
  )
}

export default BoardPage
