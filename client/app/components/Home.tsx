"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  isHowToPlayMode,
  isStartMode,
  openHowToPlay,
  openInitializeStart,
} from "../features/initialize/initialize";
import BackgroundWrapper from "./BackgroundWrapper";

const Home = () => {
  const dispatch = useAppDispatch();

  const handleHowToPlay = () => {
    dispatch(openHowToPlay());
  };
  const handleStart = () => {
    dispatch(openInitializeStart());
  };
  return (
    <BackgroundWrapper>
      <section className="home-section">
        <div className="home-container">
          <figure className="logo">
            <img
              className="home-img"
              src="/images/logo.svg"
              alt="the hangman game"
            />
          </figure>
          <div className="btn-container">
            <button onClick={handleStart} className="home-btn">
              <img src="/images/icon-play.svg" alt="start" />
            </button>
            <button onClick={handleHowToPlay} className="play-btn">
              how to play
            </button>
          </div>
        </div>
      </section>
    </BackgroundWrapper>
  );
};

export default Home;
