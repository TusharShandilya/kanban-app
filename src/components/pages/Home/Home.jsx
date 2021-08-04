import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchBoards } from '../../../store/boardsSlice'

import { BoardCardList, Heading, Container } from '../../UI'

const HomePage = () => {
  const state = useSelector((state) => state.boards)
  const dispatch = useDispatch()

  const boards = useMemo(() => {
    return Object.values(state.entities)
  }, [state])

  useEffect(() => {
    dispatch(fetchBoards())
  }, [])

  return (
    <Container size="fluid">
      <Heading isBold className="is-text-centered">
        My Boards
      </Heading>
      <Container size="lg">
        {state.loading ? <p>Loading...</p> : <BoardCardList boards={boards} />}
      </Container>
    </Container>
  )
}

export default HomePage
