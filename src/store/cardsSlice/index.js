import { createSlice } from '@reduxjs/toolkit'
import { fetchBoards } from '../boardsSlice'
import { fetchBoardsCardReducer } from './reducers'

const initialState = {
  ids: [],
  entities: {},
  loading: false,
  errors: [],
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    update: (state, { payload: { id, content } }) => {
      /**
       * Convert to async thunk
       */
      state.entities[id].content = content
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBoards.fulfilled, fetchBoardsCardReducer.fulfilled)
    builder.addCase(fetchBoards.pending, fetchBoardsCardReducer.pending)
    builder.addCase(fetchBoards.rejected, fetchBoardsCardReducer.rejected)
  },
})

export * from './reducers'
