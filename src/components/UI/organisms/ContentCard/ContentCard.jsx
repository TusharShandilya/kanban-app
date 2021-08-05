import { useRef, useState } from 'react'
import { faPenSquare, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

import { Card, Text } from '../../atoms'
import { CardEditForm } from '../../molecules'

import styles from './contentCard.module.scss'

const ContentCard = ({ card: { content } }) => {
  const [isEditable, setIsEditable] = useState(false)
  const cardRef = useRef(null)

  const toggleEditable = () => setIsEditable(!isEditable)
  console.log({ cardRef })

  return (
    <Card
      ref={cardRef}
      className={classNames(styles.card, { [styles.isEditable]: isEditable })}
    >
      <div className={styles.content}>
        {isEditable ? (
          <CardEditForm
            toggleEditable={toggleEditable}
            initialValue={content}
          />
        ) : (
          <Text>{content}</Text>
        )}
      </div>
      <div className={styles.menu} onClick={toggleEditable}>
        <FontAwesomeIcon icon={isEditable ? faTimesCircle : faPenSquare} />
      </div>
    </Card>
  )
}

export default ContentCard
