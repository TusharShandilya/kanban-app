import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { config } from '../../../../config'
import { cardsSlice } from '../../../../store/cardsSlice'
import { textLengthValidation } from '../../../../utils'
import { makeNewCard } from './cardCreateForm.utils'
import { useOutsideClick } from '../../../hooks'

import { Button, Card } from '../../atoms'
import { Input } from '../../molecules'

import styles from './cardCreateForm.module.scss'

const intitalFormState = {
  value: '',
  error: '',
  visible: false,
}

const CardCreateForm = ({ listId, ...rest }) => {
  const dispatch = useDispatch()
  const [form, setForm] = useState(intitalFormState)
  const cardRef = useRef()

  const toggleShowForm = () => {
    setForm((prev) => ({ ...prev, visible: !prev.visible }))
  }

  useOutsideClick(cardRef, toggleShowForm)

  const { maxLength } = config.card.content

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch(cardsSlice.actions.create(makeNewCard(listId, form.value)))

    setForm(intitalFormState)
  }

  const handleChange = (event) => {
    const { valid, error } = textLengthValidation(event.target.value, maxLength)
    if (valid) {
      setForm((prev) => ({ ...prev, error: '', value: event.target.value }))
    } else {
      setForm((prev) => ({ ...prev, error }))
    }
  }

  const resetForm = () => {
    setForm(intitalFormState)
  }

  if (form.visible) {
    return (
      <Card.WithRef ref={cardRef} className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            label="Card Content"
            secondaryText={`${form.value.length}/${maxLength}`}
            autoFocus
            styles={styles.textarea}
            onChange={handleChange}
            value={form.value}
            error={form.error}
            placeholder="Enter content for this card..."
            as="textarea"
          />
          <div className={styles.group}>
            <Button
              isDisabled={form.error.length}
              color="success"
              size="sm"
              type="submit"
            >
              Add card
            </Button>
            <Button
              color="danger"
              size="sm"
              type="button"
              icon={faTimes}
              aria-label="Cancel creating new card"
              onClick={resetForm}
            />
          </div>
        </form>
      </Card.WithRef>
    )
  } else {
    return (
      <div className={styles.container}>
        <Button onClick={toggleShowForm} size="sm" color="basic" icon={faPlus}>
          Add a card
        </Button>
      </div>
    )
  }
}

export default CardCreateForm
