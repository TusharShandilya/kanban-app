import { createSlice } from '@reduxjs/toolkit'
import { fetchBoards } from '../boardsSlice'
import { fetchBoardsListReducer } from './reducers'

const initialState = {
  ids: [],
  entities: {},
  loading: false,
  errors: [],
}

export const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoards.fulfilled, fetchBoardsListReducer.fulfilled)
    builder.addCase(fetchBoards.pending, fetchBoardsListReducer.pending)
    builder.addCase(fetchBoards.rejected, fetchBoardsListReducer.rejected)
  },
})

export * from './reducers'
