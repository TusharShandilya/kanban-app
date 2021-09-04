import { useState, useEffect, useRef } from 'react'
import { useOutsideClick } from '../../../hooks'
import { Heading } from '../../atoms'
import { Input } from '../../molecules'

const TitleEditForm = ({ title, headingProps, className, formProps }) => {
  const [isEditable, setIsEditable] = useState(false)
  const [value, setValue] = useState('')
  const formRef = useRef(null)
  useOutsideClick(formRef, toggleEditable)

  useEffect(() => {
    setValue(title)
  }, [title])

  function toggleEditable() {
    setIsEditable((prev) => !prev)

    if (!isEditable) {
      setValue(title)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    toggleEditable()
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className={className}>
      {isEditable ? (
        <form
          className={formProps?.className}
          ref={formRef}
          onSubmit={handleSubmit}
          {...formProps}
        >
          <Input autoFocus value={value} onChange={handleChange} />
        </form>
      ) : (
        <Heading onClick={toggleEditable} {...headingProps}>
          {title}
        </Heading>
      )}
    </div>
  )
}

export default TitleEditForm
