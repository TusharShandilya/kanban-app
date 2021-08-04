import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchBoards } from '../../../store/boardsSlice'

import { Heading, Container, BoardCards } from '../../UI'

const HomePage = () => {
  const state = useSelector((state) => state.boards)
  const dispatch = useDispatch()

  const boards = useMemo(() => {
    return Object.values(state.entities)
  }, [state])

  useEffect(() => {
    dispatch(fetchBoards())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container size="fluid">
      <Heading isBold className="is-text-centered">
        My Boards
      </Heading>
      <Container size="lg">
        {state.loading ? <p>Loading...</p> : <BoardCards boards={boards} />}
      </Container>
    </Container>
  )
}

export default HomePage
