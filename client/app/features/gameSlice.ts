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
  gameStarted: boolean;
  numOfTriesLeft: number;
  category: CategoryData | null;
  game: GameData | null;
  missingWords: string[] | null;
  alphabets: string[];
  userOption: string[] | null;
  correctWords: string[] | null;
  isCorrect: boolean | null;
  incorrectIndices: number[];
  gameOver: boolean;
  verdict: "" | "you win" | "you lose";
}
const initialState: InitialState = {
  gameStarted: false,
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
  gameOver: false,
  verdict: "",
};
export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    saveCurrentCategory: (state, action: PayloadAction<CategoryData>) => {
      state.category = action.payload;
    },
    loadGameData: (state) => {
      if (!state.category) return;

      const randomNumber = Math.floor(
        Math.random() * state.category.items.length
      );
      state.game = state.category.items[0];
    },
    setGameStarted: (state, action: PayloadAction<boolean>) => {
      state.gameStarted = action.payload;
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
        if (state.numOfTriesLeft < 1) {
          state.numOfTriesLeft = 0;
          state.gameOver = true;
          state.verdict = "you lose";

          return;
        }
      } else if (correctWordMatch.toLowerCase() === value.toLowerCase()) {
        state.isCorrect = true;
        state.incorrectIndices = state.incorrectIndices.filter(
          (i) => i !== index
        );
      }
    },
    checkForWin: (state) => {
      if (!state.correctWords || !state.userOption) {
        return;
      }
      const isArrayEqual = state.userOption.every(
        (value, index) =>
          value.toLowerCase() === state.correctWords![index].toLowerCase()
      );
      if (isArrayEqual) {
        state.gameOver = true;
        state.verdict = "you win";
      }
    },
    playAgain: (state) => {
      if (!state.category) return;
      const randomNumber = Math.floor(
        Math.random() * state.category.items.length
      );
      state.game = state.category.items[randomNumber];
      state.numOfTriesLeft = 8;
      state.verdict = "";
      state.missingWords = null;
      state.correctWords = null;
      state.userOption = null;
      state.isCorrect = null;
      state.incorrectIndices = [];
      state.gameOver = false;
      state.gameStarted = false;
    },
  },
});

export const {
  loadGameData,
  setGameStarted,
  saveCurrentCategory,
  gamePuzzle,
  updateAnswer,
  checkForCorrectAnswer,
  playAgain,
  checkForWin,
} = gameSlice.actions;
export default gameSlice.reducer;
