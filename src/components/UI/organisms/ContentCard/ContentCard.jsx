import React from 'react'
import { faPenSquare } from '@fortawesome/free-solid-svg-icons'

import { Card } from '../../atoms'

import styles from './contentCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContentCard = ({ card }) => {
  const { content } = card

  return (
    <Card className={styles.card}>
      <div className={styles.content}>{content}</div>
      <div className={styles.menu}>
        <FontAwesomeIcon icon={faPenSquare} />
      </div>
    </Card>
  )
}

export default ContentCard
