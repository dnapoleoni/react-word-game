import { createSlice, configureStore, ThunkAction, Action, PayloadAction } from "@reduxjs/toolkit"
import { LevelObject, ScreenType } from "./types"
import levelData from "./../assets/levels.json"

// state defaults
const initialState: {
  screen: ScreenType,
  allLevels: Array<object>,
  currentLevel?: LevelObject;
} = {
  screen: 'welcome',
  allLevels: levelData['levels']
}

// root state object
const rootSlice = createSlice({
  name: "root",
  initialState,

  // actions
  reducers: {
    changeScreen: (state, action: PayloadAction<ScreenType>) => {
      state.screen = action.payload;
    },
    loadLevel: (state, action: PayloadAction<LevelObject>) => {
      const levelToLoad = { ... action.payload };
      state.currentLevel = levelToLoad;
      state.screen = 'game';
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
export const { changeScreen, loadLevel } = rootSlice.actions;

// base exports
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>