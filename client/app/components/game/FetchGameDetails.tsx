"use client";

import {
  CategoryData,
  gamePuzzle,
  loadGameData,
} from "@/app/features/gameSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import "../../css/game.css";
import GameHeader from "../GameHeader";
import GameNav from "./GameNav";
import { RootState } from "@/app/store";
import Buttons from "./Buttons";
import Puzzle from "./Puzzle";

const fetchCategoryDetails = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GAME_URL}/${id}`);
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
  const missingWords = useAppSelector(
    (state: RootState) => state.game.missingWords
  );

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["category", id],
    queryFn: () => fetchCategoryDetails(id),
  });
  useEffect(() => {
    if (data) {
      dispatch(loadGameData(data));
      dispatch(gamePuzzle());
    }
  }, [data]);
  let puzzle =
    category && category.items && category.items.length > 0
      ? category.items[0].name
      : "";

  return (
    <section className="game-section">
      <div className="game-container">
        <GameNav />
        <Puzzle />
        <Buttons />
      </div>
    </section>
  );
};

export default FetchGameDetails;
