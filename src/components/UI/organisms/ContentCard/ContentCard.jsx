import { useState, useEffect } from 'react'
import { faPenSquare, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

import { Card, Field } from '../../atoms'

import styles from './contentCard.module.scss'

const ContentCard = ({ card: { content } }) => {
  const [isEditable, setIsEditable] = useState(false)
  const [contentValue, setContentValue] = useState('')

  useEffect(() => {
    setContentValue(content)
  }, [content])

  const toggleEditable = () => setIsEditable(!isEditable)

  const handleFieldChange = ({ target: { value } }) => setContentValue(value)

  const handleFormSubmit = (event) => {
    event.preventDefault()
    /**
     * TODO:
     * 1. API call
     * 2. Redux store hydrate
     */
  }

  return (
    <Card
      className={classNames(styles.card, { [styles.isEditable]: isEditable })}
    >
      <div className={styles.content}>
        {isEditable ? (
          <form onSubmit={handleFormSubmit}>
            {/**
             * TODO: Seperate out this form component
             */}
            <Field
              autoFocus
              value={contentValue}
              onChange={handleFieldChange}
            />
          </form>
        ) : (
          content
        )}
      </div>
      <div className={styles.menu} onClick={toggleEditable}>
        <FontAwesomeIcon icon={isEditable ? faTimesCircle : faPenSquare} />
      </div>
    </Card>
  )
}

export default ContentCard
