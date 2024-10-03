"use client";
import React from "react";
import { useAppSelector } from "../hooks";
import {
  isHowToPlayMode,
  isStartMode,
} from "../features/initialize/initialize";
import HowToPlay from "./how to play/HowToPlay";
import Home from "./Home";

const RenderBeforeGame = () => {
  let renderGame;
  const isHowToPlay = useAppSelector(isHowToPlayMode);
  const isStart = useAppSelector(isStartMode);
  renderGame = isHowToPlay ? <HowToPlay /> : <Home />;
  return renderGame;
};

export default RenderBeforeGame;
