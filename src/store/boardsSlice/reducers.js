import { createAsyncThunk } from '@reduxjs/toolkit'
import { normalize, schema } from 'normalizr'

import { boardsAPI } from '../../api/axios'

const cardsSchema = new schema.Entity('cards')
const listsSchema = new schema.Entity('lists', {
  cards: [cardsSchema],
})
const boardsEntity = new schema.Entity('boards', {
  lists: [listsSchema],
})

export const fetchBoards = createAsyncThunk('boards/fetchAll', async () => {
  const response = await boardsAPI.getBoards()

  const normalized = normalize(response, [boardsEntity])

  return normalized.entities
})

// export const fetchBoardsById = createAsyncThunk(
//   'boards/fetchBoardById',
//   async (boardId) => {
//     const response = await boardsAPI.getBoardById(boardId)
//     const normalized = normalize(response)
//   },
// )

export const fetchBoardReducer = {
  fulfilled: (state, action) => {
    state.entities = action.payload.boards
    state.ids = Object.keys(action.payload.boards)
    state.loading = false
    state.errors = []
  },
  pending: (state, _action) => {
    state.entities = {}
    state.ids = []
    state.errors = []
    state.loading = true
  },
  rejected: (state, action) => {
    state.entities = {}
    state.ids = []
    state.loading = false
    state.errors = action.payload.errors
  },
}
