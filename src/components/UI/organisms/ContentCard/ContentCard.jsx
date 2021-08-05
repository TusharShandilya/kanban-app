import { useState } from 'react'
import { faPenSquare, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

import { Card } from '../../atoms'
import { CardEditForm } from '../../molecules'

import styles from './contentCard.module.scss'

const ContentCard = ({ card: { content } }) => {
  const [isEditable, setIsEditable] = useState(false)

  const toggleEditable = () => setIsEditable(!isEditable)

  return (
    <Card
      className={classNames(styles.card, { [styles.isEditable]: isEditable })}
    >
      <div className={styles.content}>
        {isEditable ? <CardEditForm initialValue={content} /> : content}
      </div>
      <div className={styles.menu} onClick={toggleEditable}>
        <FontAwesomeIcon icon={isEditable ? faTimesCircle : faPenSquare} />
      </div>
    </Card>
  )
}

export default ContentCard
