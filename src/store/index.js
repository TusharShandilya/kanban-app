/**
 * STORE STRATEGY
 *
 * 1. All slices imported/exported through index.js
 * 2. Each slice to have it's own directory
 *      - Extra reducers in their own reducers.js file
 *
 */

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
