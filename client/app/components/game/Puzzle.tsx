"use client";
import {
  checkForCorrectAnswer,
  checkForWin,
  puzzleClue,
  setGameStarted,
  updateAnswer,
} from "@/app/features/gameSlice";
import Loading from "@/app/games/loading";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LoadingComponent from "../LoadingComponent";

const Puzzle = () => {
  const dispatch = useAppDispatch();
  const isCorrect = useAppSelector((state: RootState) => state.game.isCorrect);
  const gameStarted = useAppSelector(
    (state: RootState) => state.game.gameStarted
  );
  const game = useAppSelector((state: RootState) => state.game.game);

  const inCorrectIndices = useAppSelector(
    (state: RootState) => state.game.incorrectIndices
  );
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const missingWords = useAppSelector(
    (state: RootState) => state.game.missingWords
  );

  const [inputValues, setInputValues] = useState<string[]>([]);
  useEffect(() => {
    if (missingWords) {
      setInputValues(missingWords?.map((word) => word ?? ""));
    }
  }, [missingWords]);

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;

    setInputValues(newInputValues);
    setClickedIndex(index);

    const userOption = {
      index,
      value: event.target.value,
    };
    if (event.target.value !== "") {
      if (!gameStarted) {
        dispatch(setGameStarted(true));
      }
      dispatch(checkForCorrectAnswer(userOption));
    }
  };
  useEffect(() => {
    if (gameStarted) {
      dispatch(updateAnswer(inputValues));
      dispatch(checkForWin());
    }
  }, [inputValues, gameStarted]);
  useEffect(() => {
    dispatch(puzzleClue());
  }, [inputValues]);
  return (
    <div className="">
      <div className="words">
        {inputValues.length > 0 ? (
          inputValues.map((value, index) =>
            value === " " ? (
              <span key={index} className="puzzle-whitespace"></span>
            ) : (
              <input
                key={index}
                className={`puzzle ${value === "" ? "puzzle-space" : ""} ${
                  inCorrectIndices.includes(index) ? "wrong" : ""
                } `}
                type="text"
                value={value}
                onChange={(event) => handleInputChange(index, event)} //
                readOnly={!!(missingWords && missingWords[index])}
              />
            )
          )
        ) : (
          <LoadingComponent />
        )}
      </div>
    </div>
  );
};

export default Puzzle;
