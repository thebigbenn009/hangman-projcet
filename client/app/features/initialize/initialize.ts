import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isHowToPlay: boolean;
  isStart: boolean;
  quitGame: boolean;
}
const initialState: InitialState = {
  isHowToPlay: false,
  isStart: false,
  quitGame: false,
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
      state.quitGame = false;
    },
    closeInitializeStart: (state) => {
      state.isStart = false;
    },
    setQuitGame: (state) => {
      state.quitGame = true;
    },
  },
});
export const {
  openHowToPlay,
  closeHowToPlay,
  closeInitializeStart,
  setQuitGame,
  openInitializeStart,
} = initializeSlice.actions;
export const isHowToPlayMode = (state: RootState) =>
  state.initialize.isHowToPlay;
export const isStartMode = (state: RootState) => state.initialize.isStart;

export default initializeSlice.reducer;
