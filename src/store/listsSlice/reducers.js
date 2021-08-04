export const fetchBoardsListReducer = {
  fulfilled: (state, action) => {
    state.entities = action.payload.lists
    state.ids = Object.keys(action.payload.lists)
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
