import { useEffect, useState } from 'react'
import { Button, Field, Label, Overlay, Text } from '../../atoms'

import styles from './cardEditForm.module.scss'
import { cardEditFormUtils } from './cardEditForm.utils'

const CardEditForm = ({ initialValue, toggleEditable, ...rest }) => {
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
      setErrors('')
    } else {
      setErrors(error)
    }
  }

  return (
    <Overlay toggleOverlay={toggleEditable}>
      <form {...rest} className={styles.form} onSubmit={handleSubmit}>
        <Label htmlFor="card-edit-form">Edit Card</Label>
        <Field
          autoFocus
          id="card-edit-form"
          styles={styles.textarea}
          onChange={handleChange}
          value={contentValue}
          color={errors.length ? 'danger' : 'basic'}
          as="textarea"
        />
        <Text
          color={errors.length ? 'danger' : 'basic'}
          as="span"
          size="caption"
        >
          {contentValue.length}/{contentMaxLength}
        </Text>
        <Button
          isDisabled={errors.length}
          color="success"
          size="sm"
          type="submit"
        >
          Save
        </Button>
      </form>
    </Overlay>
  )
}

export default CardEditForm
