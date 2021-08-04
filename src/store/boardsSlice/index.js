import { createSlice } from '@reduxjs/toolkit'

import { fetchBoardReducer, fetchBoards } from './reducers'

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
    builder.addCase(fetchBoards.pending, fetchBoardReducer.pending)
    builder.addCase(fetchBoards.fulfilled, fetchBoardReducer.fulfilled)
    builder.addCase(fetchBoards.rejected, fetchBoardReducer.rejected)
  },
})

export * from './reducers'
