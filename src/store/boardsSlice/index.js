import { createSlice } from '@reduxjs/toolkit'

import {
  fetchBoardByIdReducer,
  fetchBoardReducer,
  fetchBoards,
  fetchBoardsById,
} from './reducers'

const initialState = {
  ids: [],
  entities: {},
  loading: false,
  errors: [],
}

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetchBoards API
    builder.addCase(fetchBoards.pending, fetchBoardReducer.pending)
    builder.addCase(fetchBoards.fulfilled, fetchBoardReducer.fulfilled)
    builder.addCase(fetchBoards.rejected, fetchBoardReducer.rejected)

    // fetchBoards by boardId API
    builder.addCase(fetchBoardsById.pending, fetchBoardByIdReducer.pending)
    builder.addCase(fetchBoardsById.fulfilled, fetchBoardByIdReducer.fulfilled)
    builder.addCase(fetchBoardsById.rejected, fetchBoardByIdReducer.rejected)
  },
})

export * from './reducers'
