import { Field, Label, Text } from '../../atoms'

import styles from './input.styles.scss'

const Input = ({ id, label, color, error, secondaryText, ...rest }) => {
  const componentColor = error ? 'danger' : 'color'

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
          <Text as="span" size="caption">
            {error}
          </Text>
        )}
        {secondaryText && (
          <Text color={componentColor} as="span" size="caption">
            {secondaryText}
          </Text>
        )}
      </div>
    </>
  )
}

export default Input
