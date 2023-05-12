import { createSlice } from "@reduxjs/toolkit"
import { ColorValueHex } from "../../app/types"
import { GetRandomColour } from "../../app/utils"

// shape
export interface ColourState {
  hex: ColorValueHex
}

// default
const initialState: ColourState = {
  hex: '#ffffff'
}

// reducers
export const ColourChangerSlice = createSlice({
  name: "colourChanger",
  initialState,
  reducers: {
    change: (state) => {
      state.hex = GetRandomColour();
    }
  }
})

// actions
export const { change } = ColourChangerSlice.actions;

// fin.
export default ColourChangerSlice.reducer