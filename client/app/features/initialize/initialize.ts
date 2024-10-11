import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isHowToPlay: boolean;
  isStart: boolean;
  newCategory: boolean;
}
const initialState: InitialState = {
  isHowToPlay: false,
  isStart: false,
  newCategory: false,
};
export const initializeSlice = createSlice({
  name: "initilize",
  initialState,
  reducers: {
    openHowToPlay: (state) => {
      state.isHowToPlay = true;
    },
    closeHowToPlay: (state) => {
      state.isHowToPlay = false;
    },
    openInitializeStart: (state) => {
      state.isStart = true;
    },
    closeInitializeStart: (state) => {
      state.isStart = false;
    },
    setNewCategory: (state) => {
      state.newCategory = true;
    },
  },
});
export const {
  openHowToPlay,
  closeHowToPlay,
  closeInitializeStart,
  setNewCategory,
  openInitializeStart,
} = initializeSlice.actions;
export const isHowToPlayMode = (state: RootState) =>
  state.initialize.isHowToPlay;
export const isStartMode = (state: RootState) => state.initialize.isStart;
export const newCategory = (state: RootState) => state.initialize.newCategory;
export default initializeSlice.reducer;
