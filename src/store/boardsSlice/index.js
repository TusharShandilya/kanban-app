import { createSlice } from '@reduxjs/toolkit'
import { fetchBoardReducer, fetchBoards } from './reducers'

export const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    id: [],
    entities: {},
    loading: false,
    errors: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoards.pending, fetchBoardReducer.pending)
    builder.addCase(fetchBoards.fulfilled, fetchBoardReducer.fulfilled)
    builder.addCase(fetchBoards.rejected, fetchBoardReducer.rejected)
  },
})

export * from './reducers'
