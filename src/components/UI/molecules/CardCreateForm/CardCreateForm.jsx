import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import { Button, Field, Label, Text } from '../../atoms'

import styles from './cardCreateForm.module.scss'

const CardCreateForm = ({ ...rest }) => {
  const [form, setForm] = useState({
    value: '',
    errors: '',
  })
  const [showForm, setShowForm] = useState(false)
  const maxLength = 3000

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, value: event.target.value }))
  }

  const toggleShowForm = () => {
    setShowForm(!showForm)
  }

  if (showForm) {
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Label
            color={form.errors.length ? 'danger' : 'basic'}
            htmlFor="card-create-form"
          >
            Card Content
          </Label>
          <Field
            autoFocus
            id="card-create-form"
            styles={styles.textarea}
            onChange={handleChange}
            value={form.value}
            color={form.errors.length ? 'danger' : 'basic'}
            as="textarea"
          />
          <Text
            color={form.errors.length ? 'danger' : 'basic'}
            as="span"
            size="caption"
          >
            {form.value.length}/{maxLength}
          </Text>
          <div className={styles.group}>
            <Button
              isDisabled={form.errors.length}
              color="success"
              size="sm"
              type="submit"
            >
              Save
            </Button>
            <Button
              isDisabled={form.errors.length}
              color="danger"
              size="sm"
              type="button"
              icon={faTimes}
              aria-label="Cancel creating new card"
              onClick={toggleShowForm}
            />
          </div>
        </form>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <Button
          onClick={toggleShowForm}
          size="basic"
          color="basic"
          icon={faPlus}
        >
          Add Card
        </Button>
      </div>
    )
  }
}

export default CardCreateForm
