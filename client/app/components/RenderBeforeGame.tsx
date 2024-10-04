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

const RenderBeforeGame = () => {
  let renderGame;
  const isHowToPlay = useAppSelector(isHowToPlayMode);
  const isStart = useAppSelector(isStartMode);
  if (isStart) {
    renderGame = <PickCategory />;
  } else {
    renderGame = isHowToPlay ? <HowToPlay /> : <Home />;
  }
  return renderGame;
};

export default RenderBeforeGame;
