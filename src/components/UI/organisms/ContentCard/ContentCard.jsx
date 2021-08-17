import { useMemo, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

import { Card, Text } from '../../atoms'
import CardEditForm from '../CardEditForm/CardEditForm'

import styles from './contentCard.module.scss'
import { cardsSlice } from '../../../../store/cardsSlice'

const ContentCard = ({ card: { id, content } }) => {
  const dispatch = useDispatch()
  const [isEditable, setIsEditable] = useState(false)
  const cardRef = useRef(null)

  const toggleEditable = () => setIsEditable(!isEditable)

  const cardPosition = useMemo(() => {
    if (isEditable && cardRef.current) {
      return cardRef.current.getBoundingClientRect()
    }
  }, [isEditable, cardRef])

  const handleCardUpdate = (id) => (content) => {
    dispatch(cardsSlice.actions.update({ id, content }))
  }

  return (
    <Card.WithRef
      ref={cardRef}
      className={classNames(styles.card, { [styles.isEditable]: isEditable })}
    >
      <div className={styles.content}>
        {isEditable && (
          <CardEditForm
            style={{
              top: cardPosition.top,
              left: cardPosition.left,
              width: cardPosition.width,
            }}
            onSubmit={handleCardUpdate(id)}
            toggleEditable={toggleEditable}
            initialValue={content}
          />
        )}
        <Text>{content}</Text>
      </div>
      <div className={styles.menu} onClick={toggleEditable}>
        <FontAwesomeIcon icon={faPenSquare} />
      </div>
    </Card.WithRef>
  )
}

export default ContentCard
