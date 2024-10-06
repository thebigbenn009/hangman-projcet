import BackgroundWrapper from "@/app/components/BackgroundWrapper";
import FetchGameDetails from "@/app/components/game/FetchGameDetails";
import React from "react";

interface PageProps {
  params: { id: string };
}

const GamePage = ({ params }: PageProps) => {
  const { id } = params;

  return (
    <BackgroundWrapper>
      <FetchGameDetails id={id} />
    </BackgroundWrapper>
  );
};

export default GamePage;
