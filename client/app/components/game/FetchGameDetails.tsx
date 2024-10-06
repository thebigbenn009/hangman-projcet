"use client";

import { CategoryData, loadGameData } from "@/app/features/gameSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import "../../css/game.css";
import GameHeader from "../GameHeader";
import GameNav from "./GameNav";
import { RootState } from "@/app/store";

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

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["category", id],
    queryFn: () => fetchCategoryDetails(id),
  });
  useEffect(() => {
    if (data) {
      dispatch(loadGameData(data));
    }
  }, [data]);
  let puzzle =
    category &&
    category.items &&
    category.items.length > 0 &&
    category.items[0].name;
  let puzTest = puzzle.toString().split("");
  console.log(puzTest);
  return (
    <section className="game-section">
      <div className="game-container">
        <GameNav />
        <p>{puzzle}</p>
      </div>
    </section>
  );
};

export default FetchGameDetails;
