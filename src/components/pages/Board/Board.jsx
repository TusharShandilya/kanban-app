import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { boardsAPI } from '../../../api/axios'

import { Container, Heading, ListCardList } from '../../UI'

import styles from './board.module.scss'

const BoardPage = () => {
  const dispatch = useDispatch()
  const [info, setInfo] = useState()
  const { boardId } = useParams()

  useEffect(() => {
    if (boardId) {
      boardsAPI.getBoardById(boardId).then((res) => {
        setInfo(res)
      })
    }
  }, [boardId])

  if (!info) {
    return <Heading>Loading...</Heading>
  }

  return (
    <Container size="fluid" isFullHeight className={styles.container}>
      <Heading className="is-text-centered">{info.title}</Heading>
      <ListCardList lists={info.lists} />
    </Container>
  )
}

export default BoardPage
