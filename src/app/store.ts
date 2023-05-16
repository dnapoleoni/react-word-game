import { createSlice, configureStore, ThunkAction, Action, PayloadAction } from "@reduxjs/toolkit"
import { ScreenType } from "./types"

// state defaults
const initialState: {
  test: string,
  screen: ScreenType
} = {
  test: 'testing',
  screen: 'welcome'
}

// root state object
const rootSlice = createSlice({
  name: "root",
  initialState,

  // actions
  reducers: {
    init: (state, action: PayloadAction<string>) => {
      state.test = action.payload;
    }
  }
})

// init
export const store = configureStore({
  reducer: {
    root: rootSlice.reducer
  }
})

// export actions
export const { init } = rootSlice.actions;

// base exports
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>