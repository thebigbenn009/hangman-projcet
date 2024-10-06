import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface GameData {
  name: string;
  selected: boolean;
  _id: string;
}
export interface CategoryData {
  _id: string;
  name: string;
  items: GameData[];
}
interface InitialState {
  category: CategoryData | {};
  game: GameData | {};
}
const initialState: InitialState = {
  category: {},
  game: {},
};
export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    loadGameData: (state, action: PayloadAction<CategoryData>) => {
      state.category = action.payload;
    },
  },
});

export const { loadGameData } = gameSlice.actions;
export default gameSlice.reducer;
