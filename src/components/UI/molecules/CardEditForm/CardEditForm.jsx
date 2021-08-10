import { useEffect, useState } from 'react'

import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { Button, Field, Label, Overlay, Text } from '../../atoms'

import { cardEditFormUtils } from './cardEditForm.utils'

import styles from './cardEditForm.module.scss'

const CardEditForm = ({ initialValue, toggleEditable, onSubmit, ...rest }) => {
  const [contentValue, setContentValue] = useState('')
  const [errors, setErrors] = useState('')
  const contentMaxLength = 3000

  useEffect(() => {
    if (initialValue) {
      setContentValue(initialValue)
    }
  }, [initialValue])

  const handleSubmit = (event) => {
    event.preventDefault()

    onSubmit(contentValue)
    toggleEditable()
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
    <Overlay aria-modal="true" toggleOverlay={toggleEditable}>
      <form {...rest} className={styles.form} onSubmit={handleSubmit}>
        <Button
          type="reset"
          size="sm"
          color="danger"
          onClick={toggleEditable}
          icon={faTimes}
          className={styles.closeBtn}
        />

        <Label
          color={errors.length ? 'danger' : 'basic'}
          htmlFor="card-edit-form"
        >
          Edit Card
        </Label>
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
