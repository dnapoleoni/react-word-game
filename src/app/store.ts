import { createSlice, configureStore, ThunkAction, Action, PayloadAction } from "@reduxjs/toolkit"
import { ScreenType } from "./types"
import levelData from "./../assets/levels.json"

// state defaults
const initialState: {
  screen: ScreenType,
  levels: Array<object>
} = {
  screen: 'welcome',
  levels: levelData['levels']
}

// root state object
const rootSlice = createSlice({
  name: "root",
  initialState,

  // actions
  reducers: {
    changeScreen: (state, action: PayloadAction<ScreenType>) => {
      state.screen = action.payload;
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
export const { changeScreen } = rootSlice.actions;

// base exports
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>