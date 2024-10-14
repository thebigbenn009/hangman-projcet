"use client";

import {
  CategoryData,
  gamePuzzle,
  loadGameData,
  saveCurrentCategory,
} from "@/app/features/gameSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import "../../css/game.css";
import GameNav from "./GameNav";
import { RootState } from "@/app/store";
import Buttons from "./Buttons";
import Puzzle from "./Puzzle";
import Modal from "../modal/Modal";
import Options from "./Options";

const fetchCategoryDetails = async (id: string) => {
  const res = await fetch(`http://127.0.0.1:8000/api/v1/games/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch category data");
  }
  const data = await res.json();

  return data.data.category;
};
interface FetchGameDetailsProps {
  id: string;
}
const FetchGameDetails = ({ id }: FetchGameDetailsProps) => {
  const dispatch = useAppDispatch();
  const category = useAppSelector(
    (state: RootState) => state.game.category
  ) as CategoryData;
  const verdict = useAppSelector((state: RootState) => state.game.verdict);
  const gameOver = useAppSelector((state: RootState) => state.game.gameOver);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["category", id],
    queryFn: () => fetchCategoryDetails(id),
  });
  useEffect(() => {
    if (data) {
      dispatch(saveCurrentCategory(data));
      dispatch(loadGameData());
      dispatch(gamePuzzle());
    }
  }, [data]);
  let puzzle =
    category && category.items && category.items.length > 0
      ? category.items[0].name
      : "";

  return (
    <section className={`game-section ${gameOver ? "game-over" : ""}`}>
      <div className="game-container">
        <GameNav />
        <Puzzle />
        <Buttons />
        {gameOver && (
          <Modal>
            <p className="verdict">{verdict}</p>
            <Options />
          </Modal>
        )}
      </div>
    </section>
  );
};

export default FetchGameDetails;
