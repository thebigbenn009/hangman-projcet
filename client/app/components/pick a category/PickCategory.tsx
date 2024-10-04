import React from "react";
import BackgroundWrapper from "../BackgroundWrapper";
import "../../css/pick-category.css";
import { useAppDispatch } from "@/app/hooks";
import { closeInitializeStart } from "@/app/features/initialize/initialize";

import GameHeader from "../GameHeader";
import Category from "./Category";
import Categories from "./Categories";

const PickCategory = () => {
  const dispatch = useAppDispatch();
  const handleCloseStartGame = () => {
    dispatch(closeInitializeStart());
  };
  return (
    <BackgroundWrapper>
      <div className="pick-category">
        <GameHeader onClick={handleCloseStartGame} title="pick a category" />
        <Categories />
        {/* <Category text="movies" /> */}
      </div>
    </BackgroundWrapper>
  );
};

export default PickCategory;
