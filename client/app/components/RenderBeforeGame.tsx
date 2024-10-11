"use client";
import React from "react";
import { useAppSelector } from "../hooks";
import {
  isHowToPlayMode,
  isStartMode,
  newCategory,
} from "../features/initialize/initialize";
import HowToPlay from "./how to play/HowToPlay";
import Home from "./Home";
import PickCategory from "./pick a category/PickCategory";

const RenderBeforeGame = () => {
  let renderGame;
  const isHowToPlay = useAppSelector(isHowToPlayMode);
  const isStart = useAppSelector(isStartMode);
  const isNewCategory = useAppSelector(newCategory);
  if (isStart || isNewCategory) {
    renderGame = <PickCategory />;
  } else {
    renderGame = isHowToPlay ? <HowToPlay /> : <Home />;
  }
  return renderGame;
};

export default RenderBeforeGame;
