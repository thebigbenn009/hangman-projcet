"use client";
import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import React, { useEffect, useState } from "react";

const Buttons = () => {
  const userOption = useAppSelector(
    (state: RootState) => state.game.userOption
  );
  const unneededLetters = useAppSelector(
    (state: RootState) => state.game.unneededLetters
  );
  const missingWords = useAppSelector(
    (state: RootState) => state.game.missingWords
  );
  const [dynamicButtons, setDynamicButtons] = useState<string[]>([]);
  useEffect(() => {
    if (!userOption) return;
    setDynamicButtons(userOption);
  }, [userOption]);
  console.log(dynamicButtons);
  const alphabets = useAppSelector((state: RootState) => state.game.alphabets);
  const addClassDynamically = (alphabet: string): string => {
    let defaultClass = "game-keys";
    if (unneededLetters.includes(alphabet)) {
      defaultClass = "game-keys picked";
    } else {
      defaultClass = "game-keys";
    }

    return defaultClass;
  };
  return (
    <div className="alphabets">
      {alphabets.map((alphabet: string, index: number) => (
        <button
          key={index}
          className={addClassDynamically(alphabet)}
          type="button"
        >
          {alphabet}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
