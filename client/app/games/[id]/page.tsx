import FetchGameDetails from "@/app/components/game/FetchGameDetails";
import React from "react";

interface PageProps {
  params: { id: string };
}

const GamePage = ({ params }: PageProps) => {
  const { id } = params;

  return <FetchGameDetails id={id} />;
};

export default GamePage;
