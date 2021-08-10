import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useMemo, useState } from 'react'
import { config } from '../../../../config'

import { textLengthValidation } from '../../../../utils'
import { Button, Field, Label, Text } from '../../atoms'

import styles from './cardCreateForm.module.scss'

const intitalFormState = {
  value: '',
  error: '',
  visible: false,
}

const CardCreateForm = ({ listId, ...rest }) => {
  const [form, setForm] = useState(intitalFormState)

  const textColor = useMemo(
    () => (form.error.length ? 'danger' : 'basic'),
    [form.error],
  )

  const { maxLength } = config.card.content

  const handleSubmit = (event) => {
    event.preventDefault()
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

  const toggleShowForm = () => {
    setForm((prev) => ({ ...prev, visible: !prev.visible }))
  }

  const resetForm = () => {
    setForm(intitalFormState)
  }

  if (form.visible) {
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Label color={textColor} htmlFor="card-create-form">
            Card Content
          </Label>
          <Field
            autoFocus
            id="card-create-form"
            styles={styles.textarea}
            onChange={handleChange}
            value={form.value}
            color={textColor}
            placeholder="Enter content for this card..."
            as="textarea"
          />
          <Text color={textColor} as="span" size="caption">
            {form.value.length}/{maxLength}
          </Text>
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
      </div>
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
