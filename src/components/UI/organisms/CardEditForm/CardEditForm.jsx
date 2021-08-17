import { useEffect, useState } from 'react'

import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { Button, Overlay } from '../../atoms'
import { Input } from '../../molecules'
import { cardEditFormUtils } from './cardEditForm.utils'

import styles from './cardEditForm.module.scss'
import { config } from '../../../../config'

const CardEditForm = ({ initialValue, toggleEditable, onSubmit, ...rest }) => {
  const [contentValue, setContentValue] = useState('')
  const [errors, setErrors] = useState('')
  const { maxLength } = config.card.content

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
      maxLength,
    )

    setContentValue(event.target.value)
    if (valid) {
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

        <Input
          autoFocus
          as="textarea"
          onChange={handleChange}
          value={contentValue}
          error={errors}
          secondaryText={`${contentValue.length}/${maxLength}`}
          label="Edit card"
        />

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
