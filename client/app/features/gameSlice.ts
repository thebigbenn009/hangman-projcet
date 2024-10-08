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
  numOfTriesLeft: number;
  category: CategoryData | null;
  game: GameData | null;
  missingWords: string[] | null;
  alphabets: string[];
  userOption: string[] | null;
  correctWords: string[] | null;
  isCorrect: boolean | null;
  incorrectIndices: number[];
}
const initialState: InitialState = {
  category: null,
  numOfTriesLeft: 8,
  game: null,
  missingWords: null,
  correctWords: null,
  userOption: null,
  isCorrect: null,
  alphabets: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  incorrectIndices: [],
};
export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    loadGameData: (state, action: PayloadAction<CategoryData>) => {
      state.category = action.payload;
      state.game = action.payload.items[0];
    },
    gamePuzzle: (state) => {
      if (state.game) {
        const actualWord = state.game.name.split("");

        state.correctWords = actualWord;
        const missingCharacters = Math.floor(actualWord.length * 0.5);
        let missingWordsArray = [...actualWord];
        let removedWords = 0;
        while (removedWords < missingCharacters) {
          const randomIndex = Math.floor(Math.random() * actualWord.length);
          if (
            missingWordsArray[randomIndex] !== "" &&
            missingWordsArray[randomIndex] !== " "
          ) {
            missingWordsArray[randomIndex] = "";
            removedWords++;
          }
        }

        state.missingWords = missingWordsArray;
      }
    },
    updateAnswer: (state, action: PayloadAction<string[]>) => {
      state.userOption = action.payload;
    },
    checkForCorrectAnswer: (
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) => {
      const { index, value } = action.payload;
      if (!state.correctWords) {
        return;
      }
      const correctWordMatch = state.correctWords[index];
      if (value === "") {
        return;
      }
      if (correctWordMatch.toLowerCase() !== value.toLowerCase()) {
        state.isCorrect = false;
        state.incorrectIndices.push(index);
        state.numOfTriesLeft--;
      } else if (correctWordMatch.toLowerCase() === value.toLowerCase()) {
        state.isCorrect = true;
        state.incorrectIndices = state.incorrectIndices.filter(
          (i) => i !== index
        );
      }
    },
  },
});

export const { loadGameData, gamePuzzle, updateAnswer, checkForCorrectAnswer } =
  gameSlice.actions;
export default gameSlice.reducer;
