import { nanoid } from '@reduxjs/toolkit'

export const makeNewCard = (listId, content) => ({
  id: nanoid(),
  content,
  listId,
})
