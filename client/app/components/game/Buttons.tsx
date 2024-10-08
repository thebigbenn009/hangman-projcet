import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import React from "react";

const Buttons = () => {
  const alphabets = useAppSelector((state: RootState) => state.game.alphabets);

  return (
    <div className="alphabets">
      {alphabets.map((alphabet: string, index: number) => (
        <button key={index} className="game-keys" type="button">
          {alphabet}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
