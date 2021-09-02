import { useState, useEffect, useRef } from 'react'
import { useOutsideClick } from '../../../hooks'
import { Heading } from '../../atoms'
import { Input } from '../../molecules'

const TitleEditForm = ({ title, headingProps, formProps }) => {
  const [isEditable, setIsEditable] = useState(false)
  const [value, setValue] = useState('')
  const formRef = useRef(null)
  useOutsideClick(formRef, toggleEditable)

  useEffect(() => {
    setValue(title)
  }, [title])

  function toggleEditable() {
    setIsEditable((prev) => !prev)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    toggleEditable()
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  if (isEditable) {
    return (
      <form ref={formRef} onSubmit={handleSubmit} {...formProps}>
        <Input autoFocus value={value} onChange={handleChange} />
      </form>
    )
  } else {
    return (
      <Heading onClick={toggleEditable} {...headingProps}>
        {title}
      </Heading>
    )
  }
}

export default TitleEditForm
