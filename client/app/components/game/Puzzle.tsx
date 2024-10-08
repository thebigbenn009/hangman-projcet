"use client";
import { checkForCorrectAnswer, updateAnswer } from "@/app/features/gameSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import React, { useEffect, useState } from "react";

const Puzzle = () => {
  const dispatch = useAppDispatch();
  const isCorrect = useAppSelector((state: RootState) => state.game.isCorrect);
  const inCorrectIndices = useAppSelector(
    (state: RootState) => state.game.incorrectIndices
  );
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const missingWords = useAppSelector(
    (state: RootState) => state.game.missingWords
  );

  const [inputValues, setInputValues] = useState<string[]>([]);
  useEffect(() => {
    if (missingWords) {
      setInputValues(missingWords?.map((word) => word ?? ""));
    }
    console.log(missingWords);
  }, [missingWords]);

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    console.log(index, event.target.value);

    setInputValues(newInputValues);
    setClickedIndex(index);
    // dispatch(updateAnswer(newInputValues));
    const userOption = {
      index,
      value: event.target.value,
    };
    if (event.target.value !== "") {
      dispatch(checkForCorrectAnswer(userOption));
    }
  };

  return (
    <div className="">
      <div className="words">
        {inputValues.length > 0 ? (
          inputValues.map((value, index) =>
            value === " " ? (
              <span className="puzzle-whitespace"></span>
            ) : (
              <input
                key={index}
                className={`puzzle ${value === "" ? "puzzle-space" : ""}${
                  inCorrectIndices.includes(index) ? "wrong" : ""
                } `}
                // style={{
                //   border: inCorrectIndices.includes(index)
                //     ? "solid 2px red"
                //     : "",
                // }}
                type="text"
                value={value}
                onChange={(event) => handleInputChange(index, event)} //
                readOnly={!!missingWords![index]}
              />
            )
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Puzzle;
