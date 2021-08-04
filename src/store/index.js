import { configureStore } from '@reduxjs/toolkit'
import { boardsSlice } from './boardsSlice'
import { cardsSlice } from './cardsSlice'
import { listsSlice } from './listsSlice'

export const store = configureStore({
  reducer: {
    boards: boardsSlice.reducer,
    lists: listsSlice.reducer,
    cards: cardsSlice.reducer,
  },
})
