import { Field, Label, Text } from '../../atoms'

import styles from './input.module.scss'

const Input = ({
  id,
  label,
  color = 'basic',
  error,
  secondaryText,
  ...rest
}) => {
  const componentColor = error ? 'danger' : color

  return (
    <>
      {label && (
        <Label color={componentColor} htmlFor={id}>
          {label}
        </Label>
      )}
      <Field color={componentColor} {...rest} id={id} />
      <div className={styles.meta}>
        {error && (
          <Text
            className={styles.error}
            color="danger"
            as="span"
            size="caption"
          >
            {error}
          </Text>
        )}
        {secondaryText && (
          <Text
            className={styles.secondaryText}
            color={componentColor}
            as="span"
            size="caption"
          >
            {secondaryText}
          </Text>
        )}
      </div>
    </>
  )
}

export default Input
