import { Button, Heading } from '../../atoms'
import { Input } from '../../molecules'

const AddBoardForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault()

    if (onSubmit) {
      onSubmit()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Heading>Add a new board</Heading>
      <Input required label="Board title" />
      <Button>Add</Button>
    </form>
  )
}

export default AddBoardForm
