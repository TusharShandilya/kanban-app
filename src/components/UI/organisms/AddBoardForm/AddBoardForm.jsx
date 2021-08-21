import { Button, Heading } from '../../atoms'
import { Input } from '../../molecules'

const AddBoardForm = () => {
  return (
    <form>
      <Heading>Add a new board</Heading>
      <Input required label="Board title" />
      <Button>Add</Button>
    </form>
  )
}

export default AddBoardForm
