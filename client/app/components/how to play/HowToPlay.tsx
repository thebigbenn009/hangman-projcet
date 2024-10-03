import React from "react";
import HowToPlayCard, { HowToPlayCardProps } from "./HowToPlayCard";

const howToPlayInfo: HowToPlayCardProps[] = [
  {
    num: 1,
    title: "Choose a category",
    body: "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
  },
  {
    num: 2,
    title: "Guess letters",
    body: "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.",
  },
  {
    num: 3,
    title: "win or lose",
    body: "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
  },
];
const HowToPlay = () => {
  return (
    <section className="section-how-to-play">
      <div className="how-to-play-header">
        <h1>How to Play</h1>
      </div>
      <div className="how-to-play-wrapper">
        {howToPlayInfo.map((el) => {
          return <HowToPlayCard {...el} />;
        })}
      </div>
    </section>
  );
};

export default HowToPlay;
