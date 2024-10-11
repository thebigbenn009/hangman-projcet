"use client";
import {
  gamePuzzle,
  loadGameData,
  playAgain,
  setNewCategory,
} from "@/app/features/gameSlice";
import { setQuitGame } from "@/app/features/initialize/initialize";
import { useAppDispatch } from "@/app/hooks";
import { useRouter } from "next/navigation";
import React from "react";

const Options = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handlePlayAgain = () => {
    dispatch(playAgain());
    dispatch(loadGameData());
    dispatch(gamePuzzle());
  };
  const handleNewCategory = () => {
    dispatch(playAgain());
    dispatch(setNewCategory());
    router.push("/");
  };
  const handleQuitGame = () => {
    dispatch(playAgain());
    dispatch(setQuitGame());
    router.push("/");
  };
  return (
    <div className="options">
      <button onClick={handlePlayAgain} className="option-1">
        play again
      </button>
      <button onClick={handleNewCategory} className="option-1">
        new category
      </button>
      <button onClick={handleQuitGame} className="option-2">
        quit game
      </button>
    </div>
  );
};

export default Options;
