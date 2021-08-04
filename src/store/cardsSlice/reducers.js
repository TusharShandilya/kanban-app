export const fetchBoardsCardReducer = {
  fulfilled: (state, action) => {
    state.entities = action.payload.cards
    state.ids = Object.keys(action.payload.cards)
    state.loading = false
  },
  pending: (state, action) => {
    state.entities = {}
    state.ids = []
    state.loading = true
  },
  rejected: (state, action) => {
    state.entities = {}
    state.ids = []
    state.loading = false
    // state.errors = []
  },
}
