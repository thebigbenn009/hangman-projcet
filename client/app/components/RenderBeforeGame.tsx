"use client";
import React from "react";
import { useAppSelector } from "../hooks";
import {
  isHowToPlayMode,
  isStartMode,
} from "../features/initialize/initialize";
import HowToPlay from "./how to play/HowToPlay";
import Home from "./Home";
import PickCategory from "./pick a category/PickCategory";
import { RootState } from "../store";

const RenderBeforeGame = () => {
  let renderGame;
  const isHowToPlay = useAppSelector(isHowToPlayMode);
  const quitGame = useAppSelector(
    (state: RootState) => state.initialize.quitGame
  );
  const isStart = useAppSelector(isStartMode);
  const isNewCategory = useAppSelector(
    (state: RootState) => state.game.newCategory
  );
  switch (true) {
    case quitGame:
      renderGame = <Home />;
      break;
    case isStart || isNewCategory:
      renderGame = <PickCategory />;
      break;
    case isHowToPlay:
      renderGame = <HowToPlay />;
      break;
    default:
      renderGame = <Home />;
  }

  return renderGame;
};

export default RenderBeforeGame;
