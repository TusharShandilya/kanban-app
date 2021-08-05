import { useEffect, useState } from 'react'
import { Button, Field, Label } from '../../atoms'

import styles from './cardEditForm.module.scss'
import { cardEditFormUtils } from './cardEditForm.utils'

const CardEditForm = ({ initialValue, ...rest }) => {
  const [contentValue, setContentValue] = useState('')
  const [errors, setErrors] = useState('')
  const contentMaxLength = 3000

  useEffect(() => {
    setContentValue(initialValue)
  }, [initialValue])

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    const { valid, error } = cardEditFormUtils.isValid(
      event.target.value,
      contentMaxLength,
    )

    if (valid) {
      setContentValue(event.target.value)
    } else {
      setErrors(error)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Label htmlFor="card-edit-form">Edit</Label>
      <Field
        id="card-edit-form"
        styles={styles.textarea}
        onChange={handleChange}
        value={contentValue}
        as="textarea"
      />
      {contentValue.length}/{contentMaxLength}
      <Button color="success" size="sm" type="submit">
        Save
      </Button>
    </form>
  )
}

export default CardEditForm
