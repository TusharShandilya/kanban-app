import { createAsyncThunk } from '@reduxjs/toolkit'
import { normalize, schema } from 'normalizr'

import { boardsAPI } from '../../api/axios'

const cardsEntity = new schema.Entity('cards')
const listsEntity = new schema.Entity('lists', {
  cards: [cardsEntity],
})
const boardsEntity = new schema.Entity('boards', {
  lists: [listsEntity],
})

export const fetchBoards = createAsyncThunk('boards/fetchAll', async () => {
  const response = await boardsAPI.getBoards()

  const normalized = normalize(response, [boardsEntity])

  return normalized.entities
})

export const fetchBoardsById = createAsyncThunk(
  'boards/fetchBoardById',
  async (boardId) => {
    const response = await boardsAPI.getBoardById(boardId)

    const normalized = normalize(response, boardsEntity)

    return normalized.entities
  },
)

export const fetchBoardByIdReducer = {
  fulfilled: (state, action) => {
    const board = action.payload.boards
    const boardId = Object.keys(board)[0]

    if (!state.ids.find((id) => id === boardId)) {
      state.ids.push(boardId)
    }
    state.entities[boardId] = board[boardId]

    state.loading = false
    state.errors = []
  },
  pending: (state, action) => {
    state.errors = []
    state.loading = true
  },
  rejected: (state, action) => {
    state.loading = false
    state.errors = action.payload.errors
  },
}
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
