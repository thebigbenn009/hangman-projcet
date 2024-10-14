"use client";
import React from "react";
import { howToPlayInfo } from "@/app/data/howToPlay";
import HowToPlayCard from "./HowToPlayCard";
import { useAppDispatch } from "@/app/hooks";
import { closeHowToPlay } from "@/app/features/initialize/initialize";
import GameHeader from "../GameHeader";

const HowToPlay = () => {
  const dispatch = useAppDispatch();
  const handleCloseHowToPlay = () => {
    dispatch(closeHowToPlay());
  };
  return (
    <section className="section-how-to-play">
      <div className="how-to-play-cont">
        <GameHeader onClick={handleCloseHowToPlay} title="how to play" />
        <div className="how-to-play-wrapper">
          {howToPlayInfo.map((el) => {
            return <HowToPlayCard {...el} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
